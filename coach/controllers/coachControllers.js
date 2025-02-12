const CoachService = require('../services/coachServices');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';
const studentServices = require('../../student/services/studentServices');

// GET all coaches
exports.getAllCoaches = async(_req, res) => {
    try {
        const coaches = await CoachService.getAllCoaches();
        res.json(coaches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a coach by ID
exports.getCoachById = async(req, res) => {
    try {
        const coach = await CoachService.getCoachById(req.params.id);
        if (coach) {
            res.json(coach);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST a new coach
exports.createCoach = async(req, res) => {
    const { name_coach, coach_department, years_coach, email, nohp } = req.body;

    if (!name_coach || !email || !nohp) {
        return res.status(400).json({ error: 'name_coach, email, and nohp are required.' });
    }

    const newCoachData = {
        name_coach,
        coach_department,
        years_coach,
        email,
        nohp,
        status_coach: req.body.status_coach !== undefined ? req.body.status_coach : 1 // Default ke 1 jika tidak diisi
    };

    try {
        const existingCoach = await CoachService.getCoachByEmail(email);
        if (existingCoach) {
            return res.status(400).json({ error: 'Coach with this email already exists.' });
        }

        const coach = await CoachService.createCoach(newCoachData);
        res.status(201).json(coach);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT update a coach
exports.updateCoach = async(req, res) => {
    const { status_coach } = req.body;

    try {
        await CoachService.updateCoach(req.params.id_coach, { status_coach });
        const updatedCoach = await CoachService.getCoachById(req.params.id_coach);
        res.json({
            message: 'Coach updated successfully',
            data: updatedCoach
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a coach
exports.deleteCoach = async(req, res) => {
    try {
        await CoachService.deleteCoach(req.params.id);
        res.json({ message: 'Coach deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// POST login
exports.login = async(req, res) => {
    const { email, nohp } = req.body;
    try {
        const coach = await CoachService.getCoachByEmail(email);
        if (coach) {
            if (coach.nohp === nohp) {
                if (coach.status_coach === 1) {
                    const token = jwt.sign({ id_coach: coach.id_coach }, secretKey, { expiresIn: '1h' });

                    // Set status_coach to 1 (active) on successful login
                    await CoachService.updateCoach(coach.id_coach, { status_coach: 1 });

                    res.json({
                        id_coach: coach.id_coach,
                        name_coach: coach.name_coach,
                        coach_department: coach.coach_department,
                        years_coach: coach.years_coach,
                        email: coach.email,
                        nohp: coach.nohp,
                        status_coach: 1, // Status online
                        token: token
                    });
                } else {
                    return res.status(403).json({ error: 'Account is inactive.' });
                }
            } else {
                return res.status(401).json({ error: 'Invalid phone number.' });
            }
        } else {
            return res.status(404).json({ error: 'Coach not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST logout
exports.logout = async(req, res) => {
    const coachId = req.params.id_coach;
    try {
        // Set status_coach to 0 (inactive) on logout
        await CoachService.updateCoach(coachId, { status_coach: 0 });
        res.json({ message: 'Coach logged out successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.assignPositionToStudent = async(req, res) => {
    const { id_student } = req.params;
    const { position, assigned_by_coach } = req.body;

    if (!position || !assigned_by_coach) {
        return res.status(400).json({ error: 'Position and assigned_by_coach are required.' });
    }

    try {
        const result = await studentServices.updateStudent(id_student, { position, assigned_by_coach });
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.json({ message: 'Position assigned successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};