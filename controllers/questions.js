const getAllQuestions = (request, response, next) => {
    response.status(200)
    response.json({
        success: true
    })
}
module.exports = {
    getAllQuestions
}