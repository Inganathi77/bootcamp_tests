function countAllFromTown(param1, param2){
  var loc = [];
  var loc2 = param1.split(',');
  for (var i = 0; i<loc2.length;i++){
    var loc3 = loc2[i];
    var loc4 = loc3.trim()
     if (loc4.startsWith(param2)){
      loc.push(loc4);
      }
  }
  return loc.length;
}
   