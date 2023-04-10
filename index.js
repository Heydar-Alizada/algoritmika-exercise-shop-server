const express = require('express');
const app = express();

const products = [
    {
        id: 1,
        name: 'fork',
        price: 2,
        quantity: 120,
    },

    {
        id: 2,
        name: 'spoon',
        price: 1,
        quantity: 200,
    },

    {
        id: 3,
        name: 'glass',
        price: 3,
        quantity: 120,
    },

    {
        id: 4,
        name: 'rocks',
        price: 5,
        quantity: 80,
    },
    
    {
        id: 5,
        name: 'shaker',
        price: 10,
        quantity: 25,
    },

    {
        id: 6,
        name: 'highball',
        price: 5,
        quantity: 70,
    },

    {
        id: 7,
        name: 'plate-small',
        price: 12,
        quantity: 200,
    },

    {
        id: 8,
        name: 'plate-large',
        price: 14,
        quantity: 200,
    },

    {
        id: 9,
        name: 'knife',
        price: 3,
        quantity: 120,
    },

    {
        id: 10,
        name: 'blender',
        price: 54,
        quantity: 20,
    }
]

app.get('/', (req, resp) => {
    resp.send('/products/{id номер товара} - используйте для поиска по id номеру ///  /products - вывести полный список');
})

app.get('/products', (req, resp) => {
    const {limit} = req.query;
    const answer = products.slice(0, +limit);
    resp.status(200).json(answer)
})

app.get('/products/:id', (req, resp) => {
    const foundedProduct = products.find(product => product.id == req.params.id);
    
    if(foundedProduct){
        resp.status(200).json(foundedProduct);
    } else {
        resp.status(404).json({'Error massage':'Нет товара по данному ID'})
    }
})


app.listen(3010, () => console.log('SERVER RUNS'))