const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const joi = require('joi');

const customerRouter = require('./routes/customerRoutes');


const app = express();
const PORT = process.env.PORT || 5000;
const mongoDbUser = process.env.MONGO_USER
const mongoDbPassword = process.env.MONGO_PASSWORD

(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${mongoDbUser}:${mongoDbPassword}@customerdb.yvvramongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
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

