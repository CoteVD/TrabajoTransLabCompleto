//Haciendo el fetch a la url
fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + cardID)
  .then(response => response.json())
  .then(bipJSON => {
    bip(bipJSON);
    bipCalculator(bipJSON);
  })
  .catch(error => {
    console.error('Problemas para obtener la información');
    console.error('Tipo de error: ' + error.stack);
  });

//Sacando la información relevante del JSON e imprimiendola en la página
const bip = (bipJSON) => {
  askedBalance.innerHTML = '';
  for (let i in bipJSON) {
    askedBalance.innerHTML = `
  ${bipJSON['saldoTarjeta']}`
  }
}

//Seleccionando la tarifa
selectedRate = () => {
  const selector = document.getElementById('rate');
  let value = selector[selector.selectedIndex].value;
  document.getElementById('askedCost').innerHTML = '$' + value;
}

//Calculando el balance final(no funcional)
const bipCalculator = (bipJSON) => {
  const cardBalance = bipJSON['saldoTarjeta'];
  /*
  let interger = parseInt(cardBalance, 10)
  console.log(interger)
}*/
  const passajeCost = askedCost.value;
  const result = parseInt(cardBalance - passajeCost);
  document.getElementById('finalBalance').innerHTML = '$' + result
}