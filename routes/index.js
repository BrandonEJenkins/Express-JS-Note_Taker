const express = require('express');
const router = express.Router();
const store = require('../db/store');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

// const app = express();

// app.use('api', apiRoutes);
// app.use(htmlRoutes);

module.exports = router;