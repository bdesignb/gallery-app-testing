const url = 'https://gallery-api.vivifyideas.com/api/';
let chai = require('chai'),
    chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);


describe('/GET galleries', () => {
    it('it should GET all ten pictures from a first page of the gallery', () => {
        chai.request(url)
            .get('galleries')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.galleries.should.have.length(10);
            });
    });
});

describe('/GET galleries?page=2', () => {
    it('it should GET ten pictures from a second page of the gallery', () => {
        chai.request(url)
            .get('galleries?page=2')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.galleries.should.have.length(10);
            });
    });
});

describe('/GET galleries?term=cancel', () => {
    it('it should GET ten pictures from a second page of the gallery', () => {
        chai.request(url)
            .get('galleries?term=cancel')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.galleries.should.have.length.above(0);
            });
    });
});

describe('/GET galleries/172', () => {
    it('it should GET picture with id 172 from gallery', () => {
        chai.request(url)
            .get('galleries/172')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('description');
                res.body.should.have.property('user_id');
                res.body.should.have.property('created_at');
                res.body.should.have.property('updated_at');
                res.body.should.have.property('user');
                res.body.should.have.property('images');
                res.body.should.have.property('comments');
            });
    });
});