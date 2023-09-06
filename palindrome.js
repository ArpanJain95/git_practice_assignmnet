function detectPalindrome(num){
    let n="";
    let numstr = num.toString();
    for(let j=numstr.length-1; j>=0; j--){
        n = n + numstr(j);
    }
    if(numstr===n){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
