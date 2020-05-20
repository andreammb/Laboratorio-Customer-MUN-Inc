/*https://www.todojs.com/uso-de-async-await-pruebas-de-un-api-rest-con-mocha-chai-y-fetch/
https://www.chaijs.com/plugins/chai-http/
https://mochajs.org/
* */


var chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = require('assert');
const expect = require('chai').expect;
var app = require('../src/server');
var create = require('../src/controllers/controllers').createNewCustomer;
var show = require('../src/controllers/controllers').renderShowCustomers;
const url= 'http://localhost:3000';
const fetch   = require('node-fetch');
const customer = require('../src/models/customer');




describe('Create new customer',function(){

    it('Add a new customer to the db',function(done){

        var char = new customer({
            name: 'Loca',
            lastName: 'Degandoca',
            dBirth: '1655-02-04',
            email: 'loca@gmail.com',
            phone: '2222222'
        });
        char.save().then(function() {
            assert(char.isNew ===false);
        });
        done();
    });
});



describe('Show customers',function(){
    //test creation
        let reader;
        beforeEach((done)=> {
            reader = customer({
                name: "reader",
                lastName: "reader",
                dBirth: "reader",
                email: "reader",
                phone: "reader" })
            reader.save()
                .then(() => {
                })
            done();
        })

    it('Should show customers',function(done){

        customer.find({name:"reader",
            lastName: "reader",
            dBirth: "reader",
            email: "reader",
            phone: "reader"})
            .then((customers) => {
            assert(reader._id.toString() === customers[0]._id.toString());
            });
        done();
    });
});
