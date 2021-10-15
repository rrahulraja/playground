const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(express.json())

console.log(process.env.DATABASE_URL)
console.log(process.env.DATABASE_USERNAME)
console.log(process.env.DATABASE_PASSWORD)

const usersRoute = require('./routes/users')
app.use('/api/', usersRoute)

app.use('/', (req, res) => {
    return res.json({
        'hello': 'world'
    })
})

app.listen(3000, () => console.log('Server started'));

module.exports = app