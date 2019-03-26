const jwt = require('jsonwebtoken')

const payload = {
  name: 'yyh123',
  admin: true
}

const secret = 'I_LOVE_YYH123'

const token = jwt.sign(payload, secret)

console.log(token)

jwt.verify(token, secret, (error, decoded) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(decoded)
})