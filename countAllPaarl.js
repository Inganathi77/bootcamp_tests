function allPaarl(list){
    var cars = list.split(", ");
    var cars1 = [];
    for (var i=0;i< cars.length;i++){
      if (cars[i].startsWith("CJ")){
        cars1.push(cars[i]);
      }
    }
     return (cars1); 
  }
     