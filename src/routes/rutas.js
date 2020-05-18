const { Router } = require('express')
const router = Router();

const{ renderIndex,renderForm,createNewCustomer, renderShowCustomers } = require('../controllers/controllers');
router.get('/', (req, res) => {
    res.render('index')
});

router.get('/',renderIndex);
//create new customer
router.get('/addCustomer',renderForm);
router.post('/addCustomer/newCustomer',createNewCustomer);
//get all customers
router.get('/showCustomers',renderShowCustomers);
module.exports=router;