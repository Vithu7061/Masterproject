const express = require('express');
const cors = require('cors');
const path = require('path');
const { pool } = require('./db');
const authRoutes = require('./auth');
const productRoutes = require('./products');

const app = express();

app.use(cors());
app.use(express.json());

// Erstelle uploads Ordner, falls er nicht existiert
const uploadDir = path.join(__dirname, 'uploads');
if (!require('fs').existsSync(uploadDir)){
    require('fs').mkdirSync(uploadDir);
}

// Stelle uploads Ordner statisch zur Verfügung
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/productsupload', express.static(path.join(__dirname, 'productsupload')));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 