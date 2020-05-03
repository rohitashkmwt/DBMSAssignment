const express = require("express");

const app = express();

const PORT = 3000;
const loginController = require('./controller/loginController');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
loginController(app);
app.listen(PORT);