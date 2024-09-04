
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/orders', (req, res) => {
    // Logic to get orders
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
