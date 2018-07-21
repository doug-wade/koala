const Koala = require('../lib');
const request = require('supertest');
const http = require('http');

describe('trace middleware', () => {
  it('should parse a json body', done => {
    const opts = {
      __disableCsrf: true,
      debug: true
    };
    const app = new Koala(opts);
    app.id = 'TEST_ID';
    app.use(async ctx => {
      ctx.id = 'TEST ID';
      ctx.trace('start');
      ctx.body = await ctx.request.body;
      ctx.trace('finish');
    });

    request(app.listen())
      .post('/')
      .send({
        message: 'lol'
      })
      .expect(200, done);
  });
});
