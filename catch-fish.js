function catchFish(k,l, m, n, total){
    var escape = [];
    
    while(total>0){
      if(total % k != 0 && total % l != 0 && total % m != 0 && total % n != 0){
        escape.push(total)
      } 
      total = total - 1;
    }
    console.log(escape.reverse());
  }
  
  catchFish(2, 3, 4, 5, 24)
  catchFish(1, 2, 3, 4, 12)
  
  