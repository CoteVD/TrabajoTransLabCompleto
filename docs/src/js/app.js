//Llamando a la página Ver Saldo
goBalance = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'block';
  balanceCalculator.style.display = 'none';
}

//Función para ver el saldo en la página
showBalance = () => {
  let numbers = document.getElementById('cardNumber').value;
  let numberSelects = document.getElementById('cards').value;

  //Haciendo el fetch a la tarjeta ingresada
  fetch('https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numbers + numberSelects)
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

//Llamando a la página Calcular Tarifa
goBalanceCalculator = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'block';
}

//Muestra las tarjetas impresas en el select para calcular
showCardsForCalc = () => {
  let number = firebase.database().ref('tarjetas/');
  number.on('child_added', function (data) {
    let numberValue = data.val();
    document.getElementById('cardsBalance').innerHTML += `
    <option>${numberValue.number}</option>
    `
  })
}

//Seleccionando la tarifa e imprimiéndola en la página
selectedRate = () => {
  const selector = document.getElementById('rate');
  let value = selector[selector.selectedIndex].value;
  document.getElementById('askedCost').innerHTML = '$' + value;
}

//Juntando los datos para meterlos a la formula para calcular el saldo
bipCalculator = () => {
  let number = document.getElementById('cardNumberCalculator').value;
  let numberSelect = document.getElementById('cardsBalance').value;
  let rate = document.getElementById('rate').value;
  if (number, numberSelect, rate !== '') {
    //Haciendo el fetch a la tarjeta ingresada para sacar el saldo
    fetch('https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + number + numberSelect)
      .then(response => response.json())
      .then(bipJSON => {
        bip(bipJSON);
      })
      .catch(error => {
        console.error('Problemas para obtener la información');
        console.error('Tipo de error: ' + error.stack);
      });

    //Sacando el saldo y guardándolo en una función
    let bip = (bipJSON) => {
      for (let i in bipJSON) {
        let regex = /(\d+)/g;
        let number = bipJSON.saldoTarjeta.match(regex);
        let balance = parseInt(number[0] += number[1], 10);
        result(balance);
      }
    }

    //Función para obtener el saldo final
    result = (balance) => {
      let result = balance - rate;
      document.getElementById('finalBalance').innerHTML = '$' + result
    }
  } else {
    alert('Debe rellenar todos los campos.')
  }
}

