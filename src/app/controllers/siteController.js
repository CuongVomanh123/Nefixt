
class siteController {
    home(req, res, next) {
        res.render('home')
    }
}
module.exports = new siteController();