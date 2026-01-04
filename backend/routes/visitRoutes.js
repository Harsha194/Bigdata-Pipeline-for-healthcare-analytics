const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const Visit = require('../models/Visit');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/* =====================
   MANUAL ADD VISIT
   ===================== */
router.post('/add', async (req, res) => {
  try {
    await Visit.create(req.body);
    res.json({ message: 'Visit added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =====================
   CSV UPLOAD VISITS
   ===================== */
router.post('/upload', upload.single('file'), (req, res) => {
  const visits = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      if (!row.visit_id || !row.patient_id) return;

      visits.push({
        visit_id: row.visit_id.trim(),
        patient_id: row.patient_id.trim(),
        doctor_name: row.doctor_name,
        visit_date: row.visit_date,
        diagnosis: row.diagnosis,
        visit_type: row.visit_type,
      });
    })
    .on('end', async () => {
      try {
        const result = await Visit.insertMany(visits, { ordered: false });
        fs.unlinkSync(req.file.path);
        res.json({ inserted: result.length });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
});

module.exports = router;
