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