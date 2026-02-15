import express from 'express';
import { createContact, deleteSingleContactById, getAllContacts, getSingleContactById, updateSingleContactById } from '../controller/contactController.js';
const router = express.Router();

router.get('/', getAllContacts)

router.get('/:id', getSingleContactById);

router.post('/', createContact)

router.put('/:id', updateSingleContactById)

router.delete('/:id', deleteSingleContactById)

export default router;