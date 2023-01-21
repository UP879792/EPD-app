const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const hostname = "localhost";
const upload = multer({ dest: "uploads/" });


app.get("/EPD-app", (request, response)=>{
    console.log(request.query)
    response.sendFile(path.join(__dirname, "./static-files"+"/index.html"))
})

app.use(express.static(path.join(__dirname, "./static-files")));
app.use(express.json())





app.listen(8080, () => {
    console.log("Server started at port 8080");
  });