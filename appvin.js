// Node JavaScript hosted

const http = require("http");
const server = http.createServer((req, res)=>{

    let namn = "Edvin";
 res.write("hello " + namn + " welcome back!");


 res.end() //stänger kopplingen och skickar den
})
 
//lyssnar på port 8000 
server.listen(8000);


const express = require("express");
const app = express();
app.get("/", (req, res))

/* 
//console.log(process);
// FS är en module i node.js hämtar funktionalitet
const fs = require("fs");

// Tar 3 argument 
// Filnamn
// Vad som ska skrivas
// Callback som fångar errors 
fs.writeFile("text.txt", "fuck you cunt", (err)=>{
    console.log(err);

});


 // Läser av filen 
 // fångar errors med (err) & läser av innehållet via (data)
 // err? = om det blir error så console loggas det 
fs.readFile("text.txt", (err, data)=>{
    err?  console.log(err):
        console.log(data.toString());
})
 */