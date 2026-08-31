const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { cheackForAuthenticationByCookie } = require("./middlewares/authentication")
require('dotenv').config();

const Blog = require("./routes")

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const app = express()
const PORT = 8000;

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("mongodb connected")).catch((err) => console.log("Error connecting to MongoDB:", err));

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views") );

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cheackForAuthenticationByCookie("token"));

app.get("/", (req, res) => {
    res.render("home", {
        user: res.user
    });
});

app.use('/user', userRoute )
app.use('/blog', blogRoute )
app.listen(PORT, () => console.log(`server started at : ${PORT}`));

