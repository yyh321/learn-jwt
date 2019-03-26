const jwt = require('jsonwebtoken')
const fs = require('fs')

const payload = {
  name: 'yyh123',
  admin: true
}

// 用RS256非对称加密算法
// 创建私钥
//1. ssh-keygen -t rsa -b 2048 -m PEM -f private.key
//2. 根据私钥，生成公钥
// openssl rsa -in private.key -pubout -outform PEM -out public.key

/**
 * RS256 (非对称加密) 
 */

const privateKey = fs.readFileSync('../config/private.key')
const token = jwt.sign(payload, privateKey, {
  algorithm: 'RS256'
})
console.log(token)