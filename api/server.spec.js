const request = require('supertest');

const server = require('./server.js');

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
});

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('should return JSON formatted response', function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

        it('should return JSON formatted response', function() {
            return request(server)
            .get('/')
            .then(res => {
                // expect(res.body).toEqual({ api: "up" });
                expect(res.body.api).toBe("up");
            });
        });

    });
});

// The endpoints returns the correct http status code based on input
// The endpoint returns the right data format (json in our case)
// The endpoint returns the right data in the body based on input