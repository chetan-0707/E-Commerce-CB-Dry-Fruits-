const JWT = {
  jwt: process.env.JWT_SECRET || '12345-67890-09876-54321',
  jwtExp: '30d',
}
module.exports = {JWT}
