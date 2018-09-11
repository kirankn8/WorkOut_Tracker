const express = require('express');
const router = express.Router();
const category = require('./controllers/category.controller');

// 
router.get('/', (req, res) => res.send('The app is up and running!'));
router.get('/healthcheck', (req, res) => res.send('The app is healthy'));

router.post('/category', category.new_category);
router.get('/category/:id', category.find_category);
router.put('/category/:id', category.update_category);
router.delete('/category/:id', category.delete_category);


module.exports = router