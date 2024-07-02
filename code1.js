function calculator(a,b){
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    let power = a ** b;
    let mod = a % b;
    return {sum, sub, mul, div, power, mod};
}
let num1 = 10;
let num2 = 5;
console.log(calculator(num1,num2));
