const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080 || 5000;


const server = express()
    .use(express.static(__dirname+"/dist"))
    .use(bodyParser.json());



server.listen(PORT, () => console.log("roger, we are online...."));
