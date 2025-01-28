const express = require('express');
const router = express.Router();

const ipController = require("../controller/ipControlller");

// route pour verifier les @IP
router.post('/check',ipController.checkIP);



module.exports = router;