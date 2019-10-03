const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes   = require('./api/routes/orders');



//Middlewire <-> Updated Part
// Routes Handling errors
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
module.exports=app;

// got to postman type
// localhost:3000 => Error Encountered
//localhost:3000/products it would work
