var express = require('express');
var router = express.Router();

const fs = require('fs'); //file system operations


//variable def 
let routes = fs.readdirSync(__dirname); //read all files in current directory (routes folder)


//for each file in routes array, require and use it ->for of loop
for(let route of routes){
  if (route.includes(".js")&& route!=="index.js"){ 
    router.use("/"+route.replace(".js",""), require("./"+route)); //"/auditlogs", require("./auditlogs.js")
  } 
};

module.exports = router;
