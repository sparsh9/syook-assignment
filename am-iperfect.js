function perfectNumber(num){
    var sum = 0;
    for (var i=0; i<=num/2; i++){
      if(num%i===0){
        sum += i;
      }
    }
    if(sum === num && sum !== 0){
      console.log("Perfect");
    }
    else if(sum > num){
      console.log("Abundant");
    }
    else if(sum < num){
      console.log("Deficient");
    }
  }
  perfectNumber(6);
  perfectNumber(12);
  perfectNumber(8);