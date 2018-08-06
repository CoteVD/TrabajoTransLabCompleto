var config = {
  apiKey: "AIzaSyDnft4d70ye6YDJoTOqbXXygkv-Qaw_zBk",
  authDomain: "translab-6bb57.firebaseapp.com",
  databaseURL: "https://translab-6bb57.firebaseio.com",
  projectId: "translab-6bb57",
  storageBucket: "translab-6bb57.appspot.com",
  messagingSenderId: "539292904808"
};
firebase.initializeApp(config);

//Datos del user para imprimir el email y mostrar la foto
goUser = () => {
  userProfile.style.display = 'block';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'none';

  //Datos del user para imprimir el email y mostrar la foto
  const user = firebase.auth().currentUser;
  let email, photoUrl, uid;
  if (user != null) {
    email = user.email;
    photoUrl = user.photoURL;
    uid = user.uid;
  }
  //Se imprime en la página
  document.getElementById('userEmail').innerHTML = email;
}

//Se guardan las tarjetas en Firebase y se imprimen en la página
//Dandole un ID a las tarjetas a través del órden de inscripción
let d = new Date();
let t = d.getTime();
let counter = t;

document.getElementById('form').addEventListener('submit', (e) => {
  let newNumber = document.getElementById('newCardNumber').value;
  e.preventDefault();
  createNumber(newNumber);
  form.reset();
})

createNumber = (newNumber) => {
  counter += 1;
  let number = {
    id: counter,
    number: newNumber
  }
  let db = firebase.database().ref('tarjetas/' + counter)
  db.set(number);
  document.getElementById('newCards').innerHTML = '';
  readCards();
  showCards();
  showCardsForCalc();
}

//Muestra las tarjetas impresas en la página
readCards = () => {
  let number = firebase.database().ref('tarjetas/');
  number.on('child_added', function (data) {
    let numberValue = data.val();
    document.getElementById('newCards').innerHTML += `
    <div class="col-10 bg-white mt-2 mb-2">
    <p class="text-center mt-2 mb-2">${numberValue.number}</p>
    </div>
    `
  })
}

//Muestra las tarjetas impresas en el select
showCards = () => {
  let number = firebase.database().ref('tarjetas/');
  number.on('child_added', function (data) {
    let numberValue = data.val();
    document.getElementById('cards').innerHTML += `
    <option>${numberValue.number}</option>
    `
  })
}