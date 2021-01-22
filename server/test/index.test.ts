import {describe, it} from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Ping", () => {
    it("GET /", async () => {
        const response = await chai.request(app).get('/');

        response.should.have.status(200);
        response.body.should.be.a('object');
    })
});

describe("Locations", () => {
    it("GET /locations", async () => {
        const response = await chai.request(app)
            .get('/locations');

        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.should.have.length(0);
    })

    it("GET /locations?q=", async () => {
        const response = await chai.request(app)
            .get('/location?q=Vat');

        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.should.have.length(7);
    })
});