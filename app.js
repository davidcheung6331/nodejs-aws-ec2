const express = require('express');
const app = express();
const port = 3000;


// simple handle HTTP '/'endpoint with response.
app.get('/', (req, res) => {
    res.send('<h1> Express Demo App</h1><p>Sample output from express');
});

// response to /products endpoint
app.get('/products', (req, res) => {
    res.send([
        {
            productId: '101',
            price: 100.80
        },
        {
            productId: '102',
            price: 50.25
        }
    ])
});


// setup the port to listen
app.listen(port, () => {
    console.log(`nodejs-express-on-aws2-ec2 app listen to port ${port}`)
});



// I made some changes
