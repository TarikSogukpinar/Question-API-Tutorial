const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Questions Home Page");
});

router.get('/delete', (request, response) => {
    response.send("Questions Delete Page");
});

module.exports = router;