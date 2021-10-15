const express = require('express')
const router = express.Router()
const userQueries = require('../database/queries/user')
const { passwordMatches } = require('../utils/encryption')
const { createJwtToken } = require('../utils/jwt-utils')
const { validateRegisterRequest } = require('../utils/validations')

router.post('/login', async (req, res) => {
    const {username, password} = req.body

    try {
        validateRegisterRequest(username, password)
    } catch(e) {
        res.status(400)
        res.json({'error': e.message})
        return
    }

    const user = userQueries.findUserByUsername(username);
    if(!user) {
        res.status(400);
        res.json({'error': 'User not found'})
        return
    }

    if(!passwordMatches(password, user.password)) {
        res.status(400);
        res.json({'error': 'Invalid Credentials'})
        return
    }

    // create a jwt token
    const jwt = await createJwtToken({id: user.id, username: user.username});
    console.log(jwt)

    res.status(200)
    res.json({
        'token': jwt
    })
})

router.post('/register', (req, res) => {
    
})

module.exports = router