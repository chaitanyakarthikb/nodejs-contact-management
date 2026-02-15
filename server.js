import express from 'express';
import { config } from 'dotenv';
import router from './router/contactRouter.js';
import errorMiddleWare from './middleware/errorMiddleware.js';
config()

const app = express();

const port = process.env.PORT || 5000;

const baseURL = '/api/contacts';

app.use(express.json());


app.use(baseURL, router);

app.use(errorMiddleWare);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})