/*
In fizzbuzz if the number is divisable by 3 it is replaced with fizz and 5 is buzz, and if it is divisible by 15 it is replaced by fizzbuzz!
*/
let n;
for (n = 1; n < 15; n++) {
    if(n % 15 === 0){
        console.log(`${n} fizzbuzz`)
    } else if(n % 5 === 0){
        console.log(`${n} buzz`)
    } else if(n % 3 === 0){
        console.log(`${n} fizz`)
    } else if(n % 3 > 0, n % 5 > 0, n % 15 > 0){
        console.log(n)
    }
}
