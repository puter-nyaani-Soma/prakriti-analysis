require('dotenv').config();
const express = require('express');
const app=express();
const mongoose = require('mongoose');
const routes = require('./routes/bodytyperoutes');
const tf = require('@tensorflow/tfjs')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/bodytype',routes)

app.use((req,res,next)=>{
    next();
})

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(
    app.listen(process.env.PORT,()=>{
        console.log('listening on port',process.env.PORT);
    })
)
.catch((error) => {
    console.log(`error : ${error.message}`)
}
)
// async function loadModel() {
//     const model = await tf.loadGraphModel('./model/saved_model.pb', ['serve'], 'serving_default');
//     return model;
//   }
  
//   // Example usage
//   async function main() {
//     const model = await loadModel();
//     // Use the model for predictions or other operations
//   }
  
//   main().catch(console.error);