const { number } = require('joi');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      }
    },
    required: true
  },
  itemsBought: {
    type: Number,
    required: true
  }
})


module.exports = mongoose.model('customers',CustomerSchema);
