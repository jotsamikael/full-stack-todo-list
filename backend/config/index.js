const dotenv = require('dotenv')

dotenv.config();

const ENV = {
    PORT: process.env.PORT,
    HOST:process.env.HOST,
    USER: process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DATABASE:process.env.DATABASE,
    DIALECT: process.env.DIALECT,
  
}

module.exports = ENV;