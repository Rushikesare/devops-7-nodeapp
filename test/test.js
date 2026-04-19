var request = require('supertest');
var app = require('../app.js');

<<<<<<< HEAD
describe('GET /', function() {
  it('respond with 404 page not found', function(done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {

describe('GET /', function () {
  it('respond with 404 page not found', function (done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function (err, res) {
>>>>>>> 6ca279e16a0abd0cc781b574c87f970a0a2760af
        if (err) {
          // If there's an error, log it and pass it to the done callback
          console.error(err);
          return done(err);
        }
        // If everything is fine, invoke the done callback
        done();
      });
  });
});
