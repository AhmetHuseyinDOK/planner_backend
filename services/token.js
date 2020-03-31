
const jwt =  require("jsonwebtoken");
const errorCodes = require('../constants/errorCodes');
exports.generateToken = ({Id}) => {
    //if you want to make it more secure you can add also time value
    //for sake of simplicity i just leave it as is
    return jwt.sign({Id},process.env.TOKEN_SECRET);
}
exports.verifyToken = (token) => {
    return jwt.verify(token,process.env.TOKEN_SECRET);
}

exports.verifyTokenOrFail = (token) => {
    try {
        return this.verifyToken(token);
    } catch ( err ) {
        throw errorCodes.token.TOKEN00401;
    }
}



