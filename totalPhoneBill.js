function totalPhoneBill(Bill){
    var phone = Bill.split(', ');
    var Call = [];
    var Sms = [];
    
    for (var i = 0; i<phone.length;i++){
      if (phone[i].startsWith("s")){
        Sms.push(phone[i]);
    } else if (phone[i].startsWith("c")){
       Call.push(phone[i]); 
    }
    } 
    var x = Call.length * 2.75;
    var y = Sms.length * 0.65;
      var totalCost = x + y;
    return("R" + totalCost.toFixed(2));
   // console.log(Call);
  }
    