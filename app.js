const express =require ('express');
const { timeCheck } = require('./middlewares/timemiddleware');
const app= express();
const port= 3000;



//app.use(timeCheck)
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/services', (req, res) => {
  res.render('Services');
});

app.get('/contact', (req, res) => {
  res.render('Contact');
});

app.listen(port,()=>{
    console.log(`Runing on ${port}`)
});
