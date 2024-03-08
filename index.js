const express= require('express');
const app= express();
const axios= require('axios');
const cheerio= require('cheerio');
require('dotenv').config()
const quotesApi= require('./quotesApi.json');
const port= process.env.PORT || 3000;

app.get('/random-movie-quote', (req, res) => {
   
    const randomIndex = Math.floor(Math.random() * quotesApi.length);
    const randomQuote = quotesApi[randomIndex];
    res.json(randomQuote);
  });

  

app.listen(port, () => {
    console.log(`api app listening at http://localhost:${port}`)
})