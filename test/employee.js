let mongoose = require('mongoose');

let Employee = require('../server/models/employee');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Employees', () => {

    // Before each test we empty the database
    beforeEach((done) =>{
        Employee.remove({}, (err) => {
            console.log(err);
            done();
        });
    });
    
    /*
    *   Test the /GET route
    */
    describe('/GET employees', () => {
        it('it should GET all employees', (done) =>{
            chai.request(server)
                .get('/api/employees')
                .end((err, res) => {
                    console.log(err);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();                
                }); 
        });
    });
    

    /*
    * Test the /POST toute
    */
   /*
   describe('/POST employee', () => {
        it('it should not POST a employee with salary field', (done) =>{
            let emp = {
                name : "Mauricio Rojas",

                position: "Sr. Developer",

                office: "Santiago"
            };

            chai.request(server)
                .post('/api/employees')
                .send(emp)
                .end((err, res) => {
                    //console.log(err);
                    
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.have.property('salary');
                    res.body.errors.salary.should.have.property('kind').eql('required');                    
                    done();
                }).catch(done);
        });
   });*/

    /*
    * Test the /POST toute
    */
  
   describe('/POST employee', () => {
        it('it should POST a new employee', (done) =>{
            let emp = {
                name : "Mauricio Rojas",
                position: "Sr. Developer",
                office: "Santiago",
                salary: 23000
            };

            chai.request(server)
                .post('/api/employees')
                .send(emp)
                .end((err, res) => {
                    res.should.have.status(200);
                    //res.body.should.have.property('status').eql('Employee Saved.');
                    console.log(res.body);
                    done();
                });
        });
   });


   /*
   * Test the /GET/:id route
   */
   describe('/GET/:id employees', () => {
    it('it should GET a employee by the given id', (done) =>{
        let emp = new Employee({ name : "Mauricio Rojas",  position: "Sr. Developer",  office: "Santiago",  salary: 23000  });

        emp.save((err, emp) => {
            chai.request(server)
                .get('/api/employees/' + emp.id)
                .send(emp)
                .end((err, res) => {
                    console.log(err);
                    res.should.have.status(200);
                    res.body.should.have.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('position');
                    res.body.should.have.property('office');
                    res.body.should.have.property('salary');
                    res.body.should.have.property('_id').eql(emp.id);
                done();                
            }); 
       });
    });
       
    });

    /*
    * Test the /PUT/:id route
    */
    describe('/PUT/:id employees', () => {
        it('it should UPDATE a employee by the given id', (done) =>{
            let emp = new Employee({ name : "Mauricio Rojas",  position: "Sr. Developer",  office: "Santiago",  salary: 23000  });
    
            emp.save((err, emp) => {
                chai.request(server)
                    .put('/api/employees/' + emp.id)
                    .send({name : "Mauricio Rojas",  position: "Sr. Developer",  office: "Santiago",  salary: 53000})
                    .end((err, res) => {
                        console.log(err);
                        res.should.have.status(200);
                        res.body.should.have.be.a('object');
                        res.body.should.have.property('status').eql('Employee Updated.');                                  
                    done();                
                }); 
           });
        });
           
        });


});