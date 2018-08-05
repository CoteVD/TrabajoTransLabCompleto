//Haciendo el fetch a la url
/*fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456')
  .then(response => response.json())
  .then(bipJSON => {
    bip(bipJSON);
    bipCalculator(bipJSON);
  })
  .catch(error => {
    console.error('Problemas para obtener la información');
    console.error('Tipo de error: ' + error.stack);
  });
*/

goBalance = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'block';
  balanceCalculator.style.display = 'none';
}

showBalance = () => {
  let number = document.getElementById('cardNumber').value;
  //Haciendo el fetch a la tarjeta ingresada
  fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + number)
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
}


goBalanceCalculator = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'block';
}

bipCalculator = () => {
  let number = document.getElementById('cardNumberCalculator').value;
  //Haciendo el fetch a la tarjeta ingresada
  fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + number)
    .then(response => response.json())
    .then(bipJSON => {
      bip(bipJSON);
      bipTotal(bipJSON);
    })
    .catch(error => {
      console.error('Problemas para obtener la información');
      console.error('Tipo de error: ' + error.stack);
    });

  //Sacando el saldo y guardándolo en una variable
  const bip = (bipJSON) => {
    for (let i in bipJSON) {
    let saldo = JSON.stringify(bipJSON['saldoTarjeta']);
    }
  }

  //Seleccionando la tarifa
  selectedRate = () => {
    const selector = document.getElementById('rate');
    let value = selector[selector.selectedIndex].value;
    document.getElementById('askedCost').innerHTML = '$' + value;
  }

  //Calculando el balance final(no funcional)
  const bipTotal = (bipJSON) => {
    const cardBalance = bipJSON['saldoTarjeta'];
    /*
    let interger = parseInt(cardBalance, 10)
    console.log(interger)
  }*/
    const passajeCost = askedCost.value;
    const result = parseInt(cardBalance - passajeCost);
    document.getElementById('finalBalance').innerHTML = '$' + result
  }
}