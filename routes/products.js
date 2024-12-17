const express = require('express');
const router = express.Router();
let products = [];


router.get('/', (req, res) => {
res.json(products);
});


router.get('/:pid', (req, res) => {
const product = products.find(p => p.id === req.params.pid);
if (product) {
    res.json(product);
} else {
    res.status(404).send('Product not found');
}
});


router.post('/', (req, res) => {
const newProduct = req.body;
products.push(newProduct);
res.status(201).json(newProduct);
});


router.put('/:pid', (req, res) => {
const product = products.find(p => p.id === req.params.pid);
if (product) {
    Object.assign(product, req.body);
    res.json(product);
} else {
    res.status(404).send('Product not found');
}
});


router.delete('/:pid', (req, res) => {
const index = products.findIndex(p => p.id === req.params.pid);
if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
} else {
    res.status(404).send('Product not found');
}
});

module.exports = router;
