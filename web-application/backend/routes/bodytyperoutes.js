const express = require('express')
const router=express.Router();
const axios = require('axios')

router.get('/',(req, res) => {
    res.send("hi");
})

router.post('/predict',async (req, res) => {
    console.log(req.body)
    const requestData={
        input:[[1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 1, 0]]

    }
    const response = await axios.post('http://127.0.0.1:5000/predict',requestData)
    //console.log(response)


    
})
module.exports = router
