const express = require('express')
const router=express.Router();
const axios = require('axios')
const controller= require('../controller/bodytypecontroller')


router.post('/predict',controller.predict_post);
module.exports = router
