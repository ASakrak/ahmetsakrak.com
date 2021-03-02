const http = require('http')

const { readFile } = require('fs')
const port = 3131


const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: Dosya bulunamadı')

        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function (error) {
    if (error) {
        console.log('kaptan sanırım bir şeyler yanlış gitti!', error)
    } else {
        console.log('server çalışıyor portda' + port)
    }
})
