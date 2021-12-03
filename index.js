const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const joi = require('joi');

const customerRouter = require('./routes/customerRoutes');


const app = express();
const port = 3009;


(async () => {
  try {
    await mongoose.connect('mongodb+srv://rukevwe:rukevwe@customerdb.yvvra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('successfully connected to mongodb');
  } catch (err) {
    console.log(err.message);
  }
})()

app.use(bodyParser.json()); 
app.use('/ruks/customers/',customerRouter );


app.listen(port, () =>{
  console.log('app is running on port ' + port);
});

