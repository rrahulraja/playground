const getEncryptedPassword = (plainTextPassword) => {
    return plainTextPassword
}

const passwordMatches = (plainTextPassword, encryptedPassword) => {
    return getEncryptedPassword(plainTextPassword) === encryptedPassword
}

module.exports = {
    getEncryptedPassword,
    passwordMatches
}