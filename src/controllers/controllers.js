const controller = {};
const Customer = require('../models/customer');

controller.renderIndex = (req, res) => {
    res.render('index')
};

controller.renderForm = (req, res) => {
    res.render('customer/addCustomer');
   // res.send('customer add');
};
controller.createNewCustomer = async (req, res) => {
  console.log(req.body);
    const {name, lastName, dBirth, email, phone} = req.body;
    const newCustomer = new Customer({name , lastName , dBirth , email , phone});
    await newCustomer.save(); //metodo asincrono
    console.log(newCustomer);
    res.render('customer/addCustomer');
    //res.send('new customer');
};
controller.renderShowCustomers = async (req, res) => {
    const customers = await Customer.find({}).lean();
    res.render('customer/showCustomers', {customers});
};

module.exports = controller;