'use strict';
const express = require('express');
const v1AuthController = require('./v1');
// const v2AuthController = require('./v2');

let router = express.Router();
router.use('/v1', v1ApiController);
// router.use('/v2', v2ApiController);
module.exports = router;