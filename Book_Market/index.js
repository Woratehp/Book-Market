const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const crudRouter = require('./routes/crudRoute');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/', crudRouter);


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB: ', error));


app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});


app.listen(process.env.PORT, () => {
    console.log(`App running on ${process.env.PORT}`);
});