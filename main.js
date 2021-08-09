window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("decimos")
  var appendSeconds = document.getElementById("segundos")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    decimos = "00";
  	segundos = "00";
    appendTens.innerHTML = decimos;
  	appendSeconds.innerHTML = segundos;
  }
  
   
  
  function startTimer () {
    decimos++; 
    
    if(decimos <= 9){
      appendTens.innerHTML = "0" + decimos;
    }
    
    if (decimos > 9){
      appendTens.innerHTML = decimos;
      
    } 
    
    if (decimos > 99) {
      console.log("segundos");
      segundoss++;
      appendSeconds.innerHTML = "0" + segundos;
      decimos = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (segundos > 9){
      appendSeconds.innerHTML = segundos;
    }
  
  }
  

}