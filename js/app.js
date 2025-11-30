let numero = Number(prompt('numero')) 

numerosos(numero)

function numerosos(numero) {
    if (numero > 0) {
        return alert("Positivo");
    } else if (numero < 0 ) {
        return alert("Negativo");
    } else if (numero === 0) {
        return alert("Zero");
    } else {
      alert("digite somente numeros");
      let novoNumero = Number(prompt('numero'));
      return numerosos(novoNumero);
    }

    }

