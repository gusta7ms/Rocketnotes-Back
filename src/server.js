const express = require("express")

const app = express()

const PORT = 3333
app.listen(PORT, () => console.log(`O server está rodando na porta: ${PORT}`))