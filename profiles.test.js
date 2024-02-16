const { startDatabase, stopDatabase } = require('./db');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./app');

beforeAll(async () => {
  await startDatabase();
});

afterAll(async () => {
  await stopDatabase();
});

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

describe('POST /profiles', () => {
  it('should create a new profile', async () => {
    const res = await request(app)
      .post('/profiles')
      .send({
        name: 'Test User',
        description: 'Test Description',
        // other profile fields...
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Test User');
    // other assertions...
  });
});

// Add more test cases as needed
