require('dotenv').config();
module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'biblioteca'
    }
}