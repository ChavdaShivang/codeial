module.exports.profile = function (req, res) {
    return res.render("users", {
        title: "Users"
    });
}

module.exports.likes = function (req, res) {
    return res.end("<h1>User likes</h1>")    
}