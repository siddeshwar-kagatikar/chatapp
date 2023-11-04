const fetchroom = (req,res,next) => {
    const token = req.header('room-no')
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try{
        req.user = token
        next();
    }catch (error) {
        res.status(401).send({ error: "error in middleware" });
    }
}

module.exports = fetchroom;