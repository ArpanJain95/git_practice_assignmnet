function isPrime(number){
    if(number < 2){
      return false;
    }
  
    for(let i = 2; i * i <= number; i++){
      if(number % 1 === 0){
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPrime(2)