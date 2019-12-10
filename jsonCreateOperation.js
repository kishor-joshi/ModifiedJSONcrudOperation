const read=require("./JsonReadOperation");
const fs = require('fs');





function setUserDetails(ID,name,fromPlace,toPlace,departureDate,adultCount,childCount,returnDate="NA"){

       let userDetails={'id':ID,'userName':name,'from':fromPlace,'to':toPlace,'departureDate':departureDate,'adultNumber':adultCount,'childNumber':childCount,'returnDate':returnDate};

          return userDetails;

}




function writeDataIntoFile(fileName,jsonFileObject){
    let jsonFileString=JSON.stringify(jsonFileObject);
    fs.writeFile (fileName, jsonFileString, function(err) {
        if (err) throw err;
      
        }
    );  
        
}




function setJsonObject(fileName,ID,name,fromPlace,toPlace,departureDate,adultCount,childCount,returnDate="NA"){    

    fs.exists(fileName, function(exists) {

        if (exists) {    
            let userDetails=setUserDetails(ID,name,fromPlace,toPlace,departureDate,adultCount,childCount,returnDate);       
        let getJsonObject=read.getJsonFileObject(fileName);       
        getJsonObject[userDetails.id]=userDetails;  
        jsonFileString=JSON.stringify(getJsonObject);    
        writeDataIntoFile(fileName,getJsonObject);            
            console.log("data entered into existing file")
            console.log(getJsonObject)
        }
        else{
            let userDetails=setUserDetails(ID,name,fromPlace,toPlace,departureDate,adultCount,childCount,returnDate);
            let userBookingDetails={};
            userBookingDetails[userDetails.id]=userDetails;
            writeDataIntoFile(fileName,userBookingDetails);  
            console.log(userBookingDetails);   
            console.log("data entered into new file")       
        }
    });                 
        
}



//setJsonObject('./JSONcrud/book.json','2','ram','blr','chennai','12/12','4','5');


module.exports={
    setJsonObject,writeDataIntoFile,setUserDetails
}