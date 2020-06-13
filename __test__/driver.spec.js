import request from './server';
// import jwt from '../src/utilies/jwt';

describe('POST /api/vi/', () => {
  it('should register a driver', () => {
    const driver = {
      username: 'user', password: 'password', fullName: 'fullname', plateNumber: 12345,
    };

    return request
      .post('/api/v1/')
      .send(driver)
      .then((res) => {
          console.log(res)
        expect(res.status).toBe(201);
        expect(res.body.data.message).toBe('Driver created succesfully');
      });
  });
});
