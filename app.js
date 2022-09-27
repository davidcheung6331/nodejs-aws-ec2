const express = require('express');
const app = express();
const port = 3000;


// simple handle HTTP '/'endpoint with response.
app.get('/', (req, res) => {
    res.send('<h1> Express Demo App</h1><p>');
});

// response to /products endpoint
app.get('/products', (req, res) => {
    res.send([
        {
            productId: '101',
            price: 110.80
        },
        {
            productId: '102',
            price: 51.25
        }
    ])
});


// setup the port to listen
app.listen(port, () => {
    console.log(`nodejs-express-on-aws2-ec2 app       listen to port ${port}`)
});



// I made some changes ................
