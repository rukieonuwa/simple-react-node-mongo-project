const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const joi = require('joi');
require('dotenv').config(); 

const customerRouter = require('./routes/customerRoutes');


const app = express();
const PORT = process.env.PORT || 3009;
const mongoDbUser = process.env.MONGO_USER;
const mongoDbPassword = process.env.MONGO_PASSWORD;
const mongostring = `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@customerdb.yvvra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

(async () => {
  try {
    await mongoose.connect(mongostring)
    console.log('successfully connected to mongodb');
  } catch (err) {
    console.log(err.message);
  }
})()

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use('/ruks/customers/',customerRouter );


app.listen(PORT, () =>{
  console.log('app is running on port ' + PORT);
});

