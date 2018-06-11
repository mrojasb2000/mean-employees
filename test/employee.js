let mongoose = require('mongoose');

let Employee = require('../server/models/employee');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index');
let should = chai.should();

chai.use(chaiHttp);

describe('/api/employees/GET employees', () => {
    it('it should GET all employees', (done) =>{
        chai.request(server)
            .get('/api/employees')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            }); 
    });
});