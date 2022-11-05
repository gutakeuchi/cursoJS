//               01234567
let umaString = 'O rato roeu a roupa do rei de roma.';
/*console.log(umaString);
console.log(umaString.concat(' em um lindo dia.')); //Não usada
console.log(umaString + ' em um lindo dia.'); // Mais ou menos usada hoje em dia
console.log(`${umaString} em um lindo dia.`); //Melhor forma de concatenação e a mais usada
*/
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g)); //Exibe palavras de a-z que são minúsculas 
console.log(umaString.search(/x/)); 
console.log(umaString.replace('Um', 'Outro')); //Substituir palavra 
console.log(umaString.replace(/r/g, '#')); //Substitui o caractere específico, a palavra 'g' serve para selecionar todas as palavras 'r' nesse caso.
console.log(umaString.length); // Serve para ver o tamanho da string
console.log(umaString.substring(umaString.length -5, umaString.length -1)); // o '-1' significa subtrair a string inteira -1, nesse caso ele tirou o '.' da string. E o -5 é aonde defini o começo da string.
console.log(umaString.slice(-5, -1)); //Mesma função da substring porém mais fácil de usar
console.log(umaString.split('r' , 2)); //Corta o caractere da frase e o 2 seria quantas posições 
console.log(umaString.toUpperCase()); // Deixa todas as caracteres em maiúsculo
console.log(umaString.toLowerCase()); // Deixa todas as caracteres em minúsculo














