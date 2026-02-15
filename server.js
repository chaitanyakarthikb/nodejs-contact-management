import express from 'express';
import { config } from 'dotenv';
import router from './router/contactRouter.js';
config()

const app = express();

const port = process.env.PORT || 5000;

const baseURL = '/api/contacts';

app.use(baseURL, router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})