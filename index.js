const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');


app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use(expressLayouts);
app.use("/", require('./routes/index'));
app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(port, function (err) {
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is up and running on port: ${port}`);
});