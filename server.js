const app = require('./src/app')
const HOST = '0.0.0.0' 
const PORT = process.env.PORT || 3000

app.listen(PORT, HOST, () => console.log(`Servidor rodando na porta ${PORT}`))