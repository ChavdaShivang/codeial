module.exports.home = function (req, res) {
    return res.end("<h1>Home</h1>");    
}

module.exports.about = function (req, res) {
    return res.end("<h1>About</h1>");
}
