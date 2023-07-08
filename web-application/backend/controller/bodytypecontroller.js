const axios = require('axios');
module.exports.predict_post=async (req,res)=>{
    console.log(req.body)
    // const requestData={
    //     input:[[1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 1, 0]]

    // }

  
    const valuesArray = Object.keys(req.body)
    .filter((key) => key.startsWith('question'))
    .map((key) => Number(req.body[key]));
    const response = await axios.post('http://127.0.0.1:5000/predict',valuesArray)
    console.log(response.data.predictions)
    res.send(response.data);
}