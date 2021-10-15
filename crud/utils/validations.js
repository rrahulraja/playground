const validateRegisterRequest = (username, password) => {
    if(!username)
    throw Error('Username not set')

    if(!password)
    throw Error('Password not set')
}

module.exports = {
    validateRegisterRequest
}