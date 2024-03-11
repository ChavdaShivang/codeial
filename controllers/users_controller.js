module.exports.profile = function (req, res) {
    return res.end("<h1>User Profile</h1>")    
}

module.exports.likes = function (req, res) {
    return res.end("<h1>User likes</h1>")    
}