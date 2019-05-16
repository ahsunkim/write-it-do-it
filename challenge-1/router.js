'use strict';

const express = require('express');
const { Dog } = require('../app/server/models');

// This router is already mounted on `/api` in app/server/app.js
const router = express.Router();

router.post('/dogs', async (req, res, next) => {
  try {
    const data = await Dog.create(req.body);
    console.log(data);
    res.status(201).send({ message: 'Success', data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
