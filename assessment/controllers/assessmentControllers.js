const AssessmentService = require('../services/assessmentServices');

// GET all assessments
exports.getAllAssessments = async(_req, res) => {
    const data = await AssessmentService.getAllAssessments();
    res.json(data);
};

// GET an assessment by ID
exports.getAssessmentById = async(req, res) => {
    const data = await AssessmentService.getAssessmentById(req.params.id_assessment);
    if (data) {
        res.json(data);
    } else {
        res.sendStatus(404);
    }
};

// POST a new assessment
exports.createAssessment = async(req, res) => {
    try {
        const result = await AssessmentService.createAssessment(req.body);
        const newAssessment = await AssessmentService.getAssessmentById(result.id); // Ambil data lengkap berdasarkan ID
        res.status(201).json(newAssessment); // Kembalikan data lengkap
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT update an assessment
exports.updateAssessment = async(req, res) => {
    try {
        await AssessmentService.updateAssessment(req.params.id_assessment, req.body);
        const updatedAssessment = await AssessmentService.getAssessmentById(req.params.id_assessment); // Ambil data lengkap setelah update
        res.json({
            message: 'Assessment updated successfully',
            data: updatedAssessment
        }); // Kembalikan pesan dan data lengkap
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE an assessment
exports.deleteAssessment = async(req, res) => {
    try {
        await AssessmentService.deleteAssessment(req.params.id_assessment);
        res.json({ message: 'Assessment deleted successfully' }); // Pemberitahuan berhasil dihapus
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};