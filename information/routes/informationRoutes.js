const express = require('express');
const router = express.Router();
const {
    getAllInformation,
    getInformationById,
    createInformation,
    updateInformation,
    deleteInformation
} = require('../controllers/informationControllers');

router.get('/', getAllInformation);
router.get('/:id_information', getInformationById);
router.post('/', createInformation);
router.put('/:id_information', updateInformation);
router.delete('/:id_information', deleteInformation);

module.exports = router;