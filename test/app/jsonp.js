
describe('jsonp', function () {
  it('should return jsonp response', function (done) {
    var app = new Koala({
      jsonp: {
        callback: '_callback'
      }
    })
    app.use(function* (next) {
      this.jsonp = {foo: 'bar'}
    })

    request(app.listen())
    .get('/user.json?_callback=fn')
    .expect(200)
    .expect('/**/ typeof fn === \'function\' && fn({"foo":"bar"});', done)
  })

  it('should return json response', function (done) {
    var app = new Koala({
      jsonp: {
        callback: '_callback'
      }
    })
    app.use(function* (next) {
      this.jsonp = {foo: 'bar'}
    })

    request(app.listen())
    .get('/user.json')
    .expect(200)
    .expect({"foo":"bar"}, done)
  })
})
