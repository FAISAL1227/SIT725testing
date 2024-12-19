const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
const dataRoutes = require('./routes/dataRoutes');
app.use('/api', dataRoutes);

// Only start the server if not in test mode 
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
