const express = require('express');
const router = express.Router();
let carts = [];

// Crear nuevo carrito
router.post('/', (req, res) => {
const newCart = {
    id: req.body.id,
    products: []
};
carts.push(newCart);
res.status(201).json(newCart);
});

// Listar productos del carrito por ID de carrito
router.get('/:cid', (req, res) => {
const cart = carts.find(c => c.id === req.params.cid);
if (cart) {
    res.json(cart.products);
} else {
    res.status(404).send('Cart not found');
}
});

// Agregar producto al carrito
router.post('/:cid/product/:pid', (req, res) => {
const cart = carts.find(c => c.id === req.params.cid);
if (cart) {
    const product = {
    product: req.params.pid,
    quantity: 1
    };
    cart.products.push(product);
    res.status(201).json(cart);
} else {
    res.status(404).send('Cart not found');
}
});

module.exports = router;
