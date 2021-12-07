const express = require('express')
const app = express()
const path = require('path')

//Static Files

 app.use(express.static(path.join(__dirname,'./')))

//Settings
app.set('port', process.env.PORT  || 4000) 

//Inicializar Servidor Con express
app.listen(app.get('port'),()=>{

    console.log("Servidor esta inicializado en el puerto "+app.get('port'))
})

