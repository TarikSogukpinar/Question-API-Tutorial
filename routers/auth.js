const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Auth Home Page");
});

router.get('/register', (request, response) => {
    response.send("Auth Register Page");
});

module.exports = router;