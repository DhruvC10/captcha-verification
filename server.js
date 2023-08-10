const express = require('express');
const path = require('path');
const fs = require('fs');


//creating instance
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const validTokens = {};

app.get('/', (req, res) => {
    res.send('Captcha Verification System');
  });

app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`);
})