const express =require('express');
const app =express();
var cors = require('cors')
const port =process.env.PORT || 5000;


const categories =require('./data/categories.json');

app.use(cors())



app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/news-categories', (req, res) =>{
   res.send(categories) 
})

app.listen(port, () => {
    console.log(`Dragon news Server Running On port,  port`);
  })
