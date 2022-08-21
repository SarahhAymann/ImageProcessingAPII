import supertest from 'supertest';
import app from '..';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('test the status of the endpoint', async () => {
        const response = await request.get(
            '/resize?filename=daydream.jpg&width=600&height=200'
        );
        expect(response.status).toBe(200);
    });
});
