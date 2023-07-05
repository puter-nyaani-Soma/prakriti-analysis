const express = require('express')
const router=express.Router();
const axios = require('axios')

router.get('/',(req, res) => {
    res.send("hi");
})

router.post('/predict',async (req, res) => {
    const requestData={
        input:[[1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 1, 0]]

    }
    const response = await axios.post('http://127.0.0.1:5000/predict',requestData)
    res.json(response.data)


    
})
module.exports = router
