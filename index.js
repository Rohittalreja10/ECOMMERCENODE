const express = require("express");
const hbs = require('hbs');
const app = express()
const path = require('path');
app.use("/photos", express.static('photos'));
let moment = require("moment")

const port = 3000;
const staticPath = path.join(__dirname, "../E-Commerce/views/")
app.set("view engine", "hbs");
app.set('views', staticPath);
hbs.registerPartials(__dirname + '/views');

app.get('/', (req, res) =>{
    res.render('home')
});
app.get('/home', (req, res) =>{
    res.render('home')
});
app.get('/mhome', (req, res) =>{
    res.render('mhome')
});
app.get('/hd', (req, res) =>{
    res.render('hd')
});
app.get('/li', (req, res) =>{
    res.render('li')
});
app.get('/au', (req, res) =>{
    res.render('au')
});
app.get('/tc', (req, res) =>{
    res.render('tc')
});
app.get('/os', (req, res) =>{
    res.render('os')
});
app.get('/bs', (req, res) =>{
    res.render('bs')
});
    

app.listen(port, ()=>{
    console.log("ok ${port}");
})