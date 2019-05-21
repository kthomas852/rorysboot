//This tutorial will be about node backends and express
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// app.get("/", (request, response)=>{
//     response.send("Hello World");
// })
const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.listen(PORT, ()=> console.log(`Now listening on port ${PORT}`));