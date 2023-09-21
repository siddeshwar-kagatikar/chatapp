const jwt = require('jsonwebtoken');
const JWT_SECRET = "Hey there!I am using whatsapp"

const fetchuser = (req,res,next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try{
        const data = jwt.verify(token, JWT_SECRET)
        console.log(req.user)
        req.user = data.user
        console.log(req.user)
        next();
    }catch (error) {
        res.status(401).send({ error: "error in middleware" });
    }
}

module.exports = fetchuser;