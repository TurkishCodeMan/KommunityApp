module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.json({message:"Lütfen Giriş Yapınız !"})
}