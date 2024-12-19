const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Import your app if you have it exported 
const app = require('../server'); 

describe('POST /api/data', function() {
  // Before testing, ensure the database is connected, or mock the database if you prefer.
  // You may set up test database environment variables here if needed.

  it('should save data and return 201 status', async function() {
    const testData = { name: "Test Name" };

    const response = await request(app)
      .post('/api/data')
      .send(testData)
      .set('Accept', 'application/json');

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('message', 'Data saved successfully');
    // Optionally, verify data is stored in DB. This may require a test-only database.
  });

  it('should fail when no name is provided', async function() {
    const response = await request(app)
      .post('/api/data')
      .send({})  // no name
      .set('Accept', 'application/json');

    expect(response.status).to.equal(500); // or 400 if you add validation
    expect(response.body).to.have.property('message');
  });
});
