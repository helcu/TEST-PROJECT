import request from 'supertest';

import app from '../../app';

describe('jest', () => {
  it('works', () => {
    expect(Math.min()).toBeGreaterThan(Math.max());
  });

  describe('GET /advice', () => {
    describe('if no query is passed', () => {
      it('returns 404', async () => {
        const { statusCode } = await request(app)
          .get('/advice')
          .send({ query: null });

        expect(statusCode).toBe(404);
      });
    });

    describe('if valid keyword is passed', () => {
      it('returns result', async () => {
        const { statusCode, body } = await request(app)
          .get('/advice/one')
          .send({ query: null });
        expect(statusCode).toBe(200);
        expect(typeof body.data).toBe('string');
      });
    });

    describe('if invalid keyword is passed', () => {
      it('returns message', async () => {
        const { statusCode, body } = await request(app)
          .get('/advice/>')
          .send({ query: null });
        expect(statusCode).toBe(200);
        expect(body.data).toEqual(
          'No advice slips found matching that search term.',
        );
      });
    });
  });
});
