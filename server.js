require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const toyController = require('./controller/toyController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/')) // thư mục chứa các file views (giao diện người dùng)
app.use(express.static(__dirname + '/public')); // Chứa các files tĩnh

// cấu hình template engine (Handlebars) cho Express
app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

// Hiển thị view
app.get('/', function (req, res) {
        res.render("toy/addOrEdit", {
        viewTitle: "Insert Toy",
    })
})
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening on Port 3000");
})

app.use('/toy', toyController);
