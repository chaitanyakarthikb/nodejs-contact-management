// @desc get all contacts
// @access public
// @route GET /api/contacts
export const getAllContacts = (req, res) => {
    res.status(200).send({ message: "This will get all contacts" });
}

// @desc get single contact by id
// @access public
// @route GET /api/contacts/:id
export const getSingleContactById = (req, res) => {
    const id = req.params.id;
    res.status(200).send({ message: `This will get a contact with id: ${id}` });
}

// @desc delete a contact by id
// @access public
// @route DELETE /api/contacts/:id
export const deleteSingleContactById = (req, res) => {
    const id = req.params.id;
    res.status(200).send({ message: `This will delete a contact with id: ${id}` });
}

// @desc update a contact by id
// @access public
// @route PUT /api/contacts/:id
export const updateSingleContactById = (req, res) => {
    const id = req.params.id;
    res.status(200).send({ message: `This will update somethig for ${id}` });
}

// @desc post a contact
// @access public
// @route POST/api/contacts
export const createContact = (req, res) => {
    const { name, email, contact } = req.body;
    if (!name || !email || !contact) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).send({ message: "This will post something to my contact list" });
}
