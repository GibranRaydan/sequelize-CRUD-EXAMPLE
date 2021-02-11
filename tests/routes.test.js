const request = require('supertest');
const app = require('../server/index.js');

describe('Post API', () => {
    it('should show all posts', async () => {
        const res = await request(app).get('/api/posts')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('posts')
    }),
        it('should show a posts', async () => {
            const res = await request(app).get('/api/posts/1')
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('post')
        })
    it('should create a new Post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                userId: 1,
                title: "Example Title",
                content: "this is an example.",
                createdAt: new Date(),
                updatedAt: new Date()
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })
    it('should update a user', async () => {
        const res = await request(app)
            .put('/api/posts/1')
            .send({
                userId: 1,
                title: "UPDATED Example Title",
                content: "this is a updated content.",
                createdAt: new Date(),
                updatedAt: new Date()
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('post')
    }),
        it('should delete a user', async () => {
            const res = await request(app)
                .del('/api/posts/1')
            expect(res.statusCode).toEqual(204)
        })
})