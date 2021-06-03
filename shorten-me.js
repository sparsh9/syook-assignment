function shortenMe(str)
{
    for(var i = 0; i < str.length; i++)
    {
         
        var count = 1;
        while (i + 1 < str.length && str.charAt(i) == str.charAt(i + 1))
        {
            i++;
            count++;
        }
        if(count==1){
          count="";
        }
        process.stdout.write(count + str.charAt(i));
    }
}

function long(str){
    var regexStr1;
    var finalStr = "";
    
    var regexStr = str.match(/[^a-z]*[a-z]/gi);
   // console.log(regexStr);
    
    for(var i=0; i<regexStr.length; i++){
       regexStr1 = regexStr[i].match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g)
      //console.log(regexStr1);
      
      if(regexStr1.length>1){
        var freq = parseInt(regexStr1[0])
        //console.log(freq);
         finalStr = finalStr.concat(regexStr1[1].repeat(freq))
      }
  
      else{
      finalStr = finalStr.concat(regexStr1[0])
      }
    }
    console.log(finalStr)
  }
    
    
     
long("11AB11W2B")
shortenMe("AAAAAAAAAAABWWWWWWWWWWWBB")