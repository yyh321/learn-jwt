const jwt = require('jsonwebtoken')

const payload = {
  name: 'yyh123',
  admin: true
}

const secret = 'I_LOVE_YYH123'
/**
 * 默认签名算法 HS256 (对称加密)
 */
const token = jwt.sign(payload, secret)

console.log(token)

jwt.verify(token, secret, (error, decoded) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(decoded)
})

// 用RS256非对称加密算法
// 创建私钥
//1. ssh-keygen -t rsa -b 2048 -m PEM -f private.key
//2. 根据私钥，生成公钥
// openssl rsa -in private.key -pubout -outform PEM -out public.key

/**
 * RS256 (非对称加密) 
 */