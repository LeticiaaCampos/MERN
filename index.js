const express = require("express");
const userRoute = require("./src/routes/user .route")
const app = express();

app.use(express.json())
app.use("/user",userRoute)
const port = 3000

app.listen(port, ()=>{
    console.log(`Servidor rodando normalmente na porta ${port}`)
});