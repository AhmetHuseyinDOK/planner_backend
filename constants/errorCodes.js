module.exports = {
    auth:{
        "AUTH00401":{
            code: "AUTH00401",
            message: "email has been already registered",
            httpCode: 401
        },
        "AUTH00402":{
            code: "AUTH00402",
            message: "password does not match",
            httpCode:401
        }
    },
    token:{
        "TOKEN00401":{
            code: "TOKEN00401",
            message: "token is not verified",
            httpCode: 401
        },
        "TOKEN00402":{
            code: "TOKEN00402",
            message: "no auth token provided",
            httpCode: 401
        }
    },
    hash:{
        "HASH00401":{
            code:"HASH00401",
            message:"hash is not verified",
            httpCode: 401
        }
    },
    user: {
        "U00404": {
            code:"U00404",
            message: "User Not Found",
            httpCode: 404
        }
    }
}