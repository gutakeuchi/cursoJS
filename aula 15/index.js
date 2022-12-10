let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); //to.String nesse caso converteu o num1 para uma string então juntou o 1 com o 2.5 sendo assim, 12.5;
// num1 = num1.toString();
// console.log(num1.toString(2)); Representação binária .toString(2);
// console.log(num1.toFixed(2)); toFixed para arrendondar o valor e a quantidade de casas decimais;
// console.log(Number.isInteger(num1)); verifica se o valor é inteiro;
// let temp = num1 + '5';
// console.log(Number.isNaN(temp));
// console.log(temp);


 

