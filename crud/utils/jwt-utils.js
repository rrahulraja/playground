const {UnsecuredJWT} = require('jose')

const createJwtToken = async (payload) => {
  const jwt = await new UnsecuredJWT(payload)
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .encode()
    

  return jwt;
};

module.exports = {
    createJwtToken
}