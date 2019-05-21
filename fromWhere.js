function fromWhere(registrationNumber){
    console.log(registrationNumber)
    if(registrationNumber === 'CY'){
        return "Bellville"
       }
     if(registrationNumber === 'CJ'){
     return "Paarl"
     }
     if(registrationNumber === "CA"){
       return "Cape Town"
     }else{
       return "Some other place!"
     }
}