/*https://www.todojs.com/uso-de-async-await-pruebas-de-un-api-rest-con-mocha-chai-y-fetch/
https://www.chaijs.com/plugins/chai-http/
https://mochajs.org/
* */

var chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
var app = require('../src/server');
const url= 'http://localhost:3000';
const fetch   = require('node-fetch');





it('Create new customer', async () => {

    const responseCustomers = await fetch(url + '/addCustomer/newCustomer');
    expect(responseCustomers.status).to.be.equal(200);

    const customers = await responseCustomers.json();
    expect(customers).to.be.an('Array');
    expect(customers.length).to.be.equal(1);

    const responseNewPost = await fetch(url + '/addCustomer/newCustomer' + customers[0].id + '/posts', {
        method: 'POST',
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": "Loca",
            "lastName": "Degandoca",
            "dBirth": "1655-02-04",
            "email": "loca@gmail.com",
            "phone": "2222222"
        })
    });
    expect(responseNewPost.status).to.be.equal(201);

    const post = await responseNewPost.json();
    expect(post).to.be.an('Object');
    expect(post.customerId).to.be.equal(customers[0].id);
    expect(post.id).to.be.a('Number');

});
/*
describe('Create new customer: ',()=>{
    it('should create new customer:', (done) => {
        chai.request(url)
            .post('/addCustomer/newCustomer')
            .send({ name: 'Loca',
                lastName: 'Degandoca',
                dBirth: '1655-02-04',
                email: 'loca@gmail.com',
                phone: '2222222'})
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});*/


describe('Create new customer', function () {
    it('should create new customer', async () => {

        const response = await fetch(url + '/showCustomers');
        expect(response.status).to.be.equal(200);

        const customers = await response.text();

        expect(customers).to.be.an('Array');
        for (let usr of customers) {
            expect(usr).to.be.an('Object');
            expect(usr.name).to.be.a('String');
            expect(usr.dBirth).to.be.a('String');
            expect(usr.email).to.be.a('String');
            expect(usr.phone).to.be.a('String');
        }

    });
});

/*

describe('get all customers: ',()=>{
    it('should get all customers', (done) => {
        chai.request(url)
            .get('/showCustomers')
            .end(function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

*/