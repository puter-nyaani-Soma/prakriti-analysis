require('dotenv').config();
const express = require('express');
const app=express();
const mongoose = require('mongoose');
const routes = require('./routes/bodytyperoutes');

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