/*const fs = require('fs')
fs.access(__dirname  + "/static/index.html", fs.constants.F_OK, function(err){
    if(err){
        //El archivo existe
        console.log('We can not access to the file')
    }else {
        console.log('We can access to the file')
    }cl
}) */

// se usa si mi proyecto necesita archivos externos, para verificar si puedo acceder a el//
/*const fs = require('fs');
fs.access(__dirname  + "/static/index.html", fs.constants.F_OK, function(err){
    if(err){
        //El archivo existe
        console.log('We can not access to the file')
    }else {
        console.log('We can  access to the file')
   }
}
)*/
const fs= require("fs")
fs.readFile ("static/index.html", "utf-8", function (err, index) {
    if (err) {
        throw err
    } 
    console.log(index)
})
