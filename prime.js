function isPrime(num){
  let count=0;
for(let i=0; i<=num; i++)
  {
    (num%i==0)?count++:null;
  }
(count==2)?console.log("Yes"):console.log("No")
}
isPrime(6);
isPrime(7);