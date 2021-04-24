'use strict';

const request = require('supertest');
const app = require('../../app');

describe('GET /healthcheck', () => {
  it('should respond with success', async () => {
    const response = await request(app)
      .get('/healthcheck')
      .expect(200);

    expect(response.body).toEqual({ success: true });
  });
});
