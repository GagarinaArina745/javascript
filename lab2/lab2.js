function pow(x, n){
    //return x to the power of n, all
    //return type - number
    return x**n}
function sumTo(n){
    let s = 0
    for (let i=0; i<=n; i++) 
        //return sum of numbers up to n
        //return type - number
        s+=i
    return s
}
function isLeapYear(year){
    //checks if the year is leap, returns boolean
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)}
function factorial(n){
    //returns bigint n!
    if (n == 0) return BigInt(1)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(n) * BigInt(factorial(n - 1));
}
function fib(n){
    //returns bigint nth fib number
    if (n == 0) return BigInt(0)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(fib(n-1)) + BigInt(fib(n - 2));
}
function compare(x){
    //return a func
    return function(y){
        //func with ternary operator
        // null if x and y are equal, thier comparison if not (boolean)
        return y==x ? null : y>x}}
function sum(...args){
    //...args - unpack list of numbers and add them up
    let s = 0
    for(let i of args) s+=i
    return s
}