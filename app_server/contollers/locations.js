module.exports.homelist = function (req, res, next) {
    res.render('index', { title: 'homelist' });
}

module.exports.locationInfo = function (req, res, next) {
    res.render('index', { title: 'locationInfo' });
}

module.exports.addReview = function (req, res, next) {
    res.render('index', { title: 'addReview' });
}