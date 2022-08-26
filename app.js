const express = require('express')
const config = require('./config/config')
const path = require('path')
const mongoose = require('mongoose');
const sessions = require("express-session");
const flash = require('connect-flash');
const cors = require('cors')


const app = express()

mongoose.connect("mongodb://localhost:27017/apphub")

//parse requests of content-type - application/json
app.use(express.json());
app.use(cors());


//parse request of content -type - application/x-ww-form-urlencoded
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', 'view')



//creating 24 hours from miliseconds
const oneDay = 1000 * 60 * 60 * 24;


//session  middleware
app.use(sessions({
    secret: "thisismysecretkeydsdgsdskde3333",
    saveUninitialized: true,
    cookie: {
        maxAge: oneDay
    },
    resave: false
}))

app.use(flash());

//Setting static folder
app.use(express.static(path.join(__dirname,"public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



const adminSeeder = require('./seeder')
// Router calling
const indexRouter = require('./routes/index')
//using router index
app.use("/index",indexRouter)

//using router for add product
const productRoute = require('./routes/admin/add_product');
app.use('/admin',productRoute)

//using route for allproduct
const allproductRoute = require('./routes/admin/allproducts')
app.use('/admin',allproductRoute)

//using route for update product and delete
const updateproductRoute =require('./routes/admin/edit_product')
app.use('/admin',updateproductRoute)

//using router for login
// const loginRoute = require('./routes/admin/edit_product')
// app.use('/',loginRoute)

//using router for category
const categoryRoute = require('./routes/admin/edit_product')
app.use('/category',categoryRoute)

//using signup and login route
const userAuth = require('./routes/admin/userauth')
app.use("/user", userAuth) 

app.use(adminSeeder)

app.listen(3001, () => {
    console.log(`App is listening on port ${config.PORT}`);
});