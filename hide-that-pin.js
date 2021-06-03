function hidePin(num){
  var binary = num.toString(2)
  var arr = [];
  var temp = binary;
  console.log(binary);
  
  while(binary != 1){
    
    if(binary >= 10000){
      binary = binary%10000;
    }
    
    if(binary>=1000){
      binary = binary%1000;
      arr.push("fall");
    }
    
    if(binary>=100){
      binary = binary%100;
      arr.push("hide your mints");
    }
    
      if(binary>=10){
      binary = binary%10;
      arr.push("double rip");
    }
  }
  
  if(binary == 1){
      arr.push("pop");
    }
    
    if(temp>=10000){
      console.log(arr);
    }
    else{
      arr = arr.reverse();
      console.log(arr);
    }

}

hidePin(3)
hidePin(11)
hidePin(19)
