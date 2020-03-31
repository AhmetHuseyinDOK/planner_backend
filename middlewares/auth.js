const TokenService =  require("../services/token");
const UserService = require("../services/user");
const errorCodes = require('../constants/errorCodes');
exports.password = async (req,res,next) => {
    
    const token = req.header('auth-password-token');
    
    if (!token) throw errorCodes.token.TOKEN00402;
    
    let auth = TokenService.verifyTokenOrFail(token);

    let user = await UserService.findByIdOrFail(auth.Id);
    
    req.auth = auth;
    req.user = user;

    next();

}