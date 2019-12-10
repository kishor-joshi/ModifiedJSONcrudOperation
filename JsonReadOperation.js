
const fs=require('fs');
const write=require('./jsonCreateOperation');
function getJsonFileObject(fileName){
    'use strict';
     
        //read the json file Synchronously
        let rawdata = fs.readFileSync(fileName);
        //convert into java script object
        let jsonObject = JSON.parse(rawdata);
        return jsonObject; 
    
}

function getDataByID(fileName,id){
   let fileData= getJsonFileObject(fileName);
   console.log(fileData[id]);
   return fileData[id];
   }




module.exports={
    getJsonFileObject,getDataByID
}

//getDataByID('./JSONcrud/book.json','2');