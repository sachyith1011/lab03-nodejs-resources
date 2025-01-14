const express = require('express');
const { use } = require('./apis/routes');
//creating app
const app = express();
const session = require('express-session');
app.use(session({secret: 'Juice'}));
//creating an express session
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//send the index html when receiving http
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname});
    });
//make the app listen on port 
const router = require('./apis/routes');
app.use(router);
//handling static HTML and EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
 res.render('index'); //no need for ejs extension
});
//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts'); 
   });
   //handling static HTML and EJS templates
//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts'); 
   });
   //route for register
app.get('/register', (req, res) => {
    res.render('register'); 
   });
   //route for login
app.get('/login', (req, res) => {
    res.render('login'); 
   });
const port=process.argv[2] || process.env.PORT || 3000;
const server=app.listen(port,()=>{
    console.log(`Cart app listening at http://localhost:${port}`);
});
   