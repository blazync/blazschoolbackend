// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const organisationRoutes = require('./routes/organizationRoutes.js');
// const adminRoutes = require('./routes/superAdminRoutes.js');
const imsRoutes = require('./routes/imsRoutes.js');
const amsRoutes = require('./routes/amsRoutes.js');
const hrmsRoutes = require('./routes/hrmsRoutes.js');
const lmsRoutes = require('./routes/lmsRoutes.js');
const inventoryRoutes = require('./routes/inventoryRoutes.js');
const libraryRoutes = require('./routes/libraryRoutes.js');
const transportRoutes = require('./routes/transportRoutes.js');
const communicationRoutes = require('./routes/communicationRoutes.js');
const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
// app.use('/api/admin', adminRoutes);
app.use('/api', organisationRoutes);

app.use('/api',imsRoutes)
app.use('/api',amsRoutes)
app.use('/api',hrmsRoutes)
app.use('/api',lmsRoutes)
app.use('/api',inventoryRoutes)
app.use('/api',libraryRoutes)
app.use('/api',transportRoutes)
app.use('/api',communicationRoutes)


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Server Started At ${PORT} port`);
});
