const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mengimpor rute
const studentRoutes = require('./student/routes/studentsRoutes');
const assessmentSetRoutes = require('./assessment_setting/routes/assessmentSetRoutes');
const assessmentRoutes = require('./assessment/routes/assessmentRoutes');
const managementRoutes = require('./management/routes/managementRoutes');
const aspectRoutes = require('./aspect/routes/aspectRoutes');
const aspectSubRoutes = require('./aspect_sub/routes/aspectsubRoutes');
const informationRoutes = require('./information/routes/informationRoutes');
const scheduleRoutes = require('./schedule/routes/sheduleRoutes');
const poinrateRoutes = require('./point_rate/routes/pointrateRoutes');
const departementRoutes = require('./departement/routes/departementRoutes');
const coachRoutes = require('./coach/routes/coachRoutes');

// Menghubungkan rute
app.use('/api/student', studentRoutes);
app.use('/api/assessment_setting', assessmentSetRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/management', managementRoutes);
app.use('/api/aspect', aspectRoutes);
app.use('/api/aspect_sub', aspectSubRoutes);
app.use('/api/information', informationRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/poinrate', poinrateRoutes);
app.use('/api/departement', departementRoutes);
app.use('/api/coach', coachRoutes);

// Middleware untuk menangani error
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Menentukan port
const PORT = process.env.PORT || 3000;

// Menjalankan server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});