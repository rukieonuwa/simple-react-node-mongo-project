const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();


router.get('/all', async (req, res) => {
  const customers = await Customer.find()
  res.send(customers);
})
 
router.get('/', async (req,res) => {
  //  res.send(req.query.name);
   const customer = await Customer.find({ name: req.query.name}).exec()
 console.log(customer);
  if (customer){
    res.send(customer)
    return;
  }
  res.status(404).send('Name not found, use a query name. Eg ?name=Ruks')
})

router.get('/:id', (req,res) => {
  const customer = customers.find(cus => cus.id === parseInt(req.params.id))
  console.log(customer);
  if (customer){res.send(customer)}
  res.status(404).send('id not found')
})

router.post('/', (req,res) => {

   const customer = new Customer({
    name: req.body.name,
    id: req.body.id,
    email: req.body.email, 
    itemsBought: req.body.itemsBought
   })

   customer.save((err, Customer) => {
     res.send(Customer);
   })
})

router.put('/:id', (req,res) =>{
  const customer = customers.find(cus => cus.id === parseInt(req.params.id))
  if (!customer){
    res.status(404).send('id not found')
    return;
  }

    customer.name = req.body.name
    res.send(customer);
})

router.delete('/:id', (req,res) =>{
  const customer = customers.find(cus => cus.id === parseInt(req.params.id))
  if (!customer){
    res.status(404).send('id not found')
    return;
  }

  const index = customers.indexOf(customer);
  customers.splice(index,1);
 
  res.send(customer);
})




module.exports = router;