const read=require('./JsonReadOperation');
const write=require('./jsonCreateOperation');

function updateDataByID(fileName,id,updateKey,newValue){   
    
    let userDetails=read.getDataByID(fileName,id);
   userDetails[updateKey]=newValue;
   let jsonFileDetails=read.getJsonFileObject(fileName);
   jsonFileDetails[id]=userDetails;
   write.writeDataIntoFile(fileName,jsonFileDetails);
   console.log(jsonFileDetails);
  console.log(userDetails);
}

updateDataByID('./JSONcrud/book.json','2','from','gulbarga');

module.exports={
    updateDataByID
}