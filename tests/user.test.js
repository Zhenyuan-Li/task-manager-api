const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('should signup a new user', async () => {
  const response = await request(app).post('/users').send({
    name: 'ben',
    email: 'ben@test.com',
    password: 'abcdefghi'
  }).expect(201)

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull()

  // Assertions about the response
  // expect(response.body,user.name).toBe('Andrew')
  expect(response.body).toMatchObject({
    user: {
      name: 'ben',
      email: 'ben@test.com'
    },
    token: user.tokens[0].token
  })
  expect(user.password).not.toBe('123456789')
})

test('should login existing user', async () => {
  const response = await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)

  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull()
  expect(response.body.token).toBe(user.tokens[1].token)
})

test('should not login nonexistent user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: 'haha'
  }).expect(400)
})

test('should not get profile for user', async () => {
  await request(app).get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send().expect(200)
})

test('should not get profile for unauthenticated user', async () => {
  await request(app).get('/users/me')
    .send().expect(401)
})

test('should delete account for user', async () => {
  await request(app).delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send().expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('should not delete account for unauthenticated user', async () => {
  await request(app).delete('/users/me')
    .send().expect(401)
})

test('should upload avatar image', async () => {
  await request(app).post('/users/me/avatar')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .attach('avatar', 'tests/fixtures/profile-pic.jpg')
  .expect(200)

  const user = await User.findById(userOneId)
  expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user field', async () => {
  const email = 'vince@test.com'
  await request(app).patch('/users/me')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({ email }).expect(200)

  const user = await User.findById(userOneId)
  expect(user.email).toBe(email)
})

test('should not update invalid user field', async () => {
  const email = 'vince@test.com'
  await request(app).patch('/users/me')
  .send({ email }).expect(401)

  await request(app).patch('/users/me')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({ location: 'Brisbane' }).expect(400)
})

// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated