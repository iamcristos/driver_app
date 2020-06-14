import request from './server';
import jwtHelper from '../src/utilies/jwt';

const association = { name: 'association' };
describe('POST /api/v1/association/;id', () => {
  let token = null;

  beforeAll(async (done) => {
    token = await jwtHelper.generateToken({ id: 1 });
    done();
  });
  it('should register a driver', () => request
    .post('/api/v1/association/1')
    .send(association)
    .set('authorization', token)
    .then((res) => {
      expect(res.status).toBe(201);
    }));

  it('should return 422', () => request
    .post('/api/v1/association/1')
    .then((res) => {
      expect(res.status).toBe(422);
    }));

  it('should return 401 if invalid token', () => request
    .post('/api/v1/association/1')
    .send(association)
    .set('authorization', 'token')
    .then((res) => {
      expect(res.status).toBe(401);
    }));

  it('should return 403 if not driver', () => request
    .post('/api/v1/association/10')
    .send(association)
    .set('authorization', token)
    .then((res) => {
      expect(res.status).toBe(403);
    }));
});
