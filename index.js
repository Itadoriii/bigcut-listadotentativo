const express = require('express')
const app = express()

const port = 9000;

app.listen(port,() => {
    console.log('ejemplo escuchando al http://localhost:${port}')
});

app.get('/foo',function(req,res){
    res.json({"hola mundo ":"chao mundo"} );
});