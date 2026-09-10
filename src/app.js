const express = require('express')
const app = express()

app.use(express.json());

const data = {
    'integrantes': [

        { 'nome': 'Mateus Florindo Fraga' },
        { 'nome': 'Gustavo dos Santos Pereira' },
        { 'nome': 'Eduardo Varela Becker' }

    ]
}

app.get('/integrantes', (req, res) => {

    res.json(data)

})


app.listen(3000, () => {
    console.log('Example app listening on port: ' + 3000)
})