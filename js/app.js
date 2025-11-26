let array = []

let item1 = prompt('adicione um item a lista');
let item2 = prompt('adicione mais um item a lista');

while (verificarArray(item1)) {
    item1 = prompt('erro, ja existe esse item na lista');
}

while (verificarArray(item2) || item2 === item1) {
    item2 = prompt('erro, ja existe esse item na lista');
}

array.push(item1, item2)

prompt(array)

function verificarArray(item) {
  if (array.includes(item)) {
    alert('o item ja esta na lista, digite outro')
       return true;
  }
       return false;
    
}

while (verificarString(numero1) || verificarString(numero2)) {
    numero1 = prompt('digite um numero para uma media');
    numero2 = prompt('digite outro numero para a media');
}

let media = calcularMedia(numero1, numero2)
alert(media)

function calcularMedia(num1, num2) {
   return (num1 + num2) /2;
}

   
function verificarString(valor) {
    if (valor === '' || valor === null || isNaN(valor)) {
        alert('Escreva algo válido!');
        return true;
    }
}