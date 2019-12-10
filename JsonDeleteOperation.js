const read=require('./JsonReadOperation');
const write=require('./jsonCreateOperation'); 


function deleteDataByID(fileName,id){
    let fileDetails=read.getJsonFileObject(fileName);
    console.log(fileDetails);
    delete fileDetails[id];
    console.log(fileDetails);
    write.writeDataIntoFile(fileName,fileDetails);

}
deleteDataByID('./JSONcrud/book.json','19');
