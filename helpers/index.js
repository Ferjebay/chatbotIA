
const generarJWT   = require('./generar-jwt');

module.exports = {
    ...dbValidator,
    ...generarJWT
}
