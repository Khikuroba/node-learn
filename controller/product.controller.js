var db = require('../db')

module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage =  8;

    var start = (page-1)*perPage;
    var end = page*perPage;

    var productsNumber = db.get('products').value().length;
    var drop = start;

    res.render('products/index', {
        // products: db.get('products').value().slice(start, end)
        users: db.get('users').value(),
        products: db.get('products').drop(start).take(perPage).value(),
        current: page, 
        pageNumber: Math.ceil(productsNumber/perPage)
    });
}