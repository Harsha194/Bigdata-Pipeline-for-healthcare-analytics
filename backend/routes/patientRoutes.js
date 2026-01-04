const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const Patient = require('../models/Patient');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/* =====================
   MANUAL ADD PATIENT
   ===================== */
router.post('/add', async (req, res) => {
  try {
    await Patient.create(req.body);
    res.json({ message: 'Patient added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =====================
   CSV UPLOAD PATIENTS
   ===================== */
router.post('/upload', upload.single('file'), (req, res) => {
  const patients = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      if (!row.patient_id) return;

      patients.push({
        patient_id: row.patient_id.trim(),
        full_name: row.full_name,
        age: Number(row.age),
        gender: row.gender,
        blood_group: row.blood_group,
        phone_number: row.phone_number,
        email: row.email,
        emergency_contact: row.emergency_contact,
        hospital_location: row.hospital_location,
        bmi: Number(row.bmi),
        smoker_status: row.smoker_status,
        alcohol_use: row.alcohol_use,
        chronic_conditions: row.chronic_conditions
          ? row.chronic_conditions.split(',').map(c => c.trim())
          : [],
        registration_date: row.registration_date,
        insurance_type: row.insurance_type,
      });
    })
    .on('end', async () => {
      try {
        const result = await Patient.insertMany(patients, { ordered: false });
        fs.unlinkSync(req.file.path);
        res.json({ inserted: result.length });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
});

module.exports = router;
