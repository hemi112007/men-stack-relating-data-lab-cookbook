const express = require('express');
const Food = require('../models/food');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const pantry = await Food.find({});
    res.render('foods/index', { pantry });
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.redirect('/');
  }
});


router.get('/new', (req, res) => res.render('foods/new'));


router.post('/', async (req, res) => {
  try {
    await Food.create(req.body);
    res.redirect('/foods');
  } catch (err) {
    console.error(err);
    res.redirect('/foods');
  }
});


router.get('/:id/edit', async (req, res) => {
  try {
    const item = await Food.findById(req.params.id);
    res.render('foods/edit', { item });
  } catch (err) {
    console.error(err);
    res.redirect('/foods');
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Food.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/foods');
  } catch (err) {
    console.error(err);
    res.redirect('/foods');
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.redirect('/foods');
  } catch (err) {
    console.error(err);
    res.redirect('/foods');
  }
});

module.exports = router;
