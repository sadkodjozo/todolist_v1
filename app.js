const express = require('express');
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {

    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items, route: req.url });


});

app.post("/", function (req, res) {

    const item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});

//  WORK ROUTE
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems, route: req.url });
});

app.post('/work', function (req, res) {

    const item = req.body.newItem;
    workItems.push(item);

    res.redirect('/work');
})

// ABOUT

app.get('/about', function (req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});