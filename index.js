const express = require('express');

const app = express();
app.use(express.json());

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/customers', (request, response) => {
    response.status(200).json({ message: 'GET request received on /customers' });
});

app.get('/orders', (request, response) => {
    response.status(200).json({ message: 'GET request received on /orders' });
});

app.get('/orders/:id', (request, response) => {
    console.log(request.params);
    response.status(200).json({ message: `GET request received on /orders with route parameter id ${request.params.id}` });
});

app.put('/orders', (request, response) => {
    console.log(request.query);
    response.status(200).json({ message: `PUT request received on /orders with query id ${request.query.id}` });
});

app.post('/orders', (request, response) => {
    console.log(request.body);
    response.status(200).json({ message: `POST request received on /orders with request body of ${JSON.stringify(request.body)}` });
});

app.delete('/orders/:id', (request, response) => {
    console.log(request.params);
    response.status(200).json({ message: `DELETE request received on /orders with route parameter id ${request.params.id}` });
});