const chai = require('chai')
const { expect } = chai
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const should = chai.should()
const app = require('../app')

describe('Server', function () {
  it ('should return not found', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) return console.error(err)
        res.should.have.status(404)
        done()
      })
  })

  it ('should return "Hello, you!" without path parameter', (done) => {
    chai.request(app)
      .get('/api/hello')
      .end((err, res) => {
        if (err) return console.error(err)
        res.should.have.status(200)
        expect(res.text).to.equal('Hello, you!')
        done()
      })
  })

  it ('should return "Hello, Duncan!" with path parameter "Duncan"', (done) => {
    chai.request(app)
      .get('/api/hello/Duncan')
      .end((err, res) => {
        if (err) return console.error(err)
        res.should.have.status(200)
        expect(res.text).to.equal('Hello, Duncan!')
        done()
      })
  })
})