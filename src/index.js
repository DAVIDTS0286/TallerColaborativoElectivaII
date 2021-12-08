
const app = require('./app')

//Inicializar Servidor Con express
app.listen(app.get('port'),()=>{
    console.log("Servidor esta inicializado en el puerto "+app.get('port'))
})

