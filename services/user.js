const {failOnNull} = require('../utils/functionWrappers');
const errorCodes = require('../constants/errorCodes');
const fs = require('fs');
let users = new Map(require('../users.json'));

exports.create = async ({username , password}) => {
    //re-implement as you want you can use sequelize or just write to a file (just joking it is not a good idea)
    //change however you want
    
    if(this.findByUsername(username)){
        throw errorCodes.auth.AUTH00401;
    }

    let user = {
        username,
        password,
        id: new Date().getTime()
    }
    await new Promise( (res ,rej ) => fs.writeFile("users.json",JSON.stringify([...users , [user.id , user]]),res))
    users.set(user.id, user);
    return user;
}

exports.findByUsername = (username) => {
    //IMPLEMENT
    for (const [id, user] of users) {
        if(user.username == username){
            return user;        
        }
    }
    return null;
}

exports.findById = (search) => {
    //IMPLEMENT
    for (const [id,user] of users) {
        if(search == id){
            return user;
        }
    }
    return null;
}


exports.findByUsernameOrFail =  failOnNull(this.findByUsername,errorCodes.user.U00404);
exports.findByIdOrFail = failOnNull(this.findById , errorCodes.user.U00404);