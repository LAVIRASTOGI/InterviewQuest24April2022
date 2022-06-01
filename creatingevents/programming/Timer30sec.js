let countTime=1;

var x=setInterval(function(){
    countTime++;
    document.getElementById('countTimer').innerHTML=countTime;
    console.log(countTime)
    // whatever code
    if(countTime == 30) {clearInterval(x)}; 
  }, 1000);


  document.getElementById('countTimer').innerHTML=countTime;