import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({ message: "This will get all contacts" });
})

router.post('/', (req, res) => {
    res.status(201).send({ message: "This will post something to my contact list" });
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send({ message: `This will update somethig for ${id}` });
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send({ message: `This will delete a contact with id: ${id}` });
})


export default router;