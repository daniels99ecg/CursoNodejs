const express=require('express');

const app=express();
port=80;

app.get("/home",(req, res)=>{
    //res.send('Esto es una prueba de servidor principal ');
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})

app.get("/pruebas", (req, res)=>{
    res.send('Esto es otra prueba');
});

app.listen(80, ()=>{
    console.log(`Servidor en linea en el puerto ${port}`);
});