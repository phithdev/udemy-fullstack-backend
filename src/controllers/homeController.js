const getHomepage = (req, res) => {
    res.send('Hello World! & nodemon 12315')
}
const getABC = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getABC
}