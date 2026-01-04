const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const Prescription = require('../models/Prescription');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/* =====================
   MANUAL ADD PRESCRIPTION
   ===================== */
router.post('/add', async (req, res) => {
  try {
    await Prescription.create({
      ...req.body,
      quantity: Number(req.body.quantity),
      days_supply: Number(req.body.days_supply),
    });
    res.json({ message: 'Prescription added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =====================
   CSV UPLOAD PRESCRIPTIONS
   ===================== */
router.post('/upload', upload.single('file'), (req, res) => {
  const prescriptions = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      if (!row.prescription_id || !row.patient_id) return;

      prescriptions.push({
        prescription_id: row.prescription_id.trim(),
        visit_id: row.visit_id,
        patient_id: row.patient_id.trim(),
        drug_name: row.drug_name,
        dosage: row.dosage,
        quantity: Number(row.quantity),
        days_supply: Number(row.days_supply),
        prescribed_date: row.prescribed_date,
      });
    })
    .on('end', async () => {
      try {
        const result = await Prescription.insertMany(prescriptions, {
          ordered: false,
        });
        fs.unlinkSync(req.file.path);
        res.json({ inserted: result.length });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
});

module.exports = router;
