const request = require('supertest');
const app = require('../server');
const db = require('../models/index');

let token;

beforeAll(async (done) => {
  await db.sequelize.sync({ force: true });

  request(app)
  .post('/user')
  .send({
    login: 'letscd',
    password: 'lets@123',
  })
  .end((err, response) => {
    token = response.body.token;
    done();
  });
});

const createCard = () => {
  db.card.create({
    title: 'A',
    content: 'a',
    list: 'list'
  })
}

describe('test with cards endpoint without token', () => {
    it('should return error status when get cards', async () => {
      const res = await request(app).get('/cards');
      expect(res.statusCode).toEqual(401);
    });

    it('should return error status when post cards', async () => {
        const res = await request(app).post('/cards');
        expect(res.statusCode).toEqual(401);
    });

    it('should return error status when put card', async () => {
        const res = await request(app).put('/cards/1');
        expect(res.statusCode).toEqual(401);
    });

    it('should return error status when delete card', async () => {
        const res = await request(app).delete('/cards/1');
        expect(res.statusCode).toEqual(401);
    });
});

describe('test with cards endpoint with token', () => {
    it('should return cards', async () => {
      const res = await request(app).get('/cards')
      .set('Authorization', `Bearer ${token}`);
      expect(res.statusCode).toEqual(200);
    });

    it('should create card', async () => {
        const res = await request(app).post('/cards')
        .send({
          title: 'A',
          content: 'a',
          list: 'list'
        })
        .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(201);
    });

    it('should update card', async () => {
        createCard();
        const res = await request(app).put('/cards/1')
        .send({
          title: 'B',
          content: 'b',
          list: 'list'
        })
        .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });

    it('should delete card', async () => {
        createCard();
        const res = await request(app).delete('/cards/1')
        .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
    });
});

