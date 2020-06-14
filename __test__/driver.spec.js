import request from './server';
// import jwt from '../src/utilies/jwt';

const driver = {
  username: 'user', password: 'password', fullName: 'fullname', plateNumber: 12345,
};
describe('POST /api/vi/', () => {
  it('should register a driver', () => request
    .post('/api/v1/')
    .send(driver)
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.message).toBe('Driver created succesfully');
    }));

  it('should return 422', () => request
    .post('/api/v1/')
    .then((res) => {
      expect(res.status).toBe(422);
    }));

  it('should return 400 driver already exists', () => request
    .post('/api/v1/')
    .send(driver)
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Driver plateNumber and username already exists');
    }));
});

describe('POST /api/v1/login', () => {
  it('should return 422 ', () => request
    .post('/api/v1/login')
    .then((res) => {
      expect(res.status).toBe(422);
    }));

  it('should login driver', () => request
    .post('/api/v1/login')
    .send(driver)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.token).toBeTruthy();
    }));
});
