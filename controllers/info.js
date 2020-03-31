exports.info  = (req  ,res) => {
    res.send({
       message: "hello from basic api ! you are "+req.user.username,
       user: req.user
    });
}