const mongoose = require('mongoose');
const search = require('./routes/search');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://nigam:nigam1@cluster0.vwt9x.mongodb.net/product?retryWrites=true&w=majority',{ useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/search', search);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));