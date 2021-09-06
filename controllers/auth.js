const register = (request, response, next) => {
    response.status(200)
    response.json({
        success: true
    })
}

module.exports = {
    register
}