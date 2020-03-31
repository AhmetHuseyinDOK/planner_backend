const UserService = require('../services/user');
const TokenService = require('../services/token');
const errorCodes = require('../constants/errorCodes');
exports.signIn = async (req ,res) => {
    let user = await UserService.create(req.body);
    res.send(user);
}

exports.logIn = async  (req ,res) => {
    let user = await UserService.findByUsernameOrFail(req.body.username);
    if(user.password == req.body.password){
        return res.send(TokenService.generateToken({Id:user.id}));
    }else{
        throw errorCodes.auth.AUTH00402;
    }
}