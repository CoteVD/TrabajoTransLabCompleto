var config = {
  apiKey: "AIzaSyDnft4d70ye6YDJoTOqbXXygkv-Qaw_zBk",
  authDomain: "translab-6bb57.firebaseapp.com",
  databaseURL: "https://translab-6bb57.firebaseio.com",
  projectId: "translab-6bb57",
  storageBucket: "translab-6bb57.appspot.com",
  messagingSenderId: "539292904808"
};
firebase.initializeApp(config);

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

//Se guardan las tarjetas
let d = new Date();
let t = d.getTime();
let counter = t;

document.getElementById('form').addEventListener('submit', (e) => {
  const newNumber = document.getElementById('newCardNumber').value;
  e.preventDefault();
  createNumber(newNumber);
  form.reset();
})

createNumber = (newNumber) => {
  counter += 1;
  const number = {
    id: counter,
    number: newNumber
  }
  let db = firebase.database().ref('tarjetas/' + counter)
  db.set(number);
  document.getElementById('newCards').innerHTML = '';
  readCards();
}
/*newCard = () => {
  firebase.database().ref('tarjetas')
    .on('child_added', (newCardNumber) => {
      const newCardDiv = document.createElement('div')
      newCards.appendChild(newCardDiv)
      newCardDiv.innerHTML +=
        `<div class="row">
          <div style = "background-color: #white" class="m-2">          
            <p class="p-3">${newCardNumber.val().text}</p>          
          </div>
        </div>`;
    });
}
window.onload = () => {
  newData = document.getElementById('newCardNumber');
  newData.addEventListener('submit', sendNew, false);

  newRef = firebase.database().ref().child('tarjetas');
}

let newData;
let newRef;

newCard = (event) => {
  event.preventDefault();
  newRef.push({
    tarjetas: event.target.newCardNumber.value
  })
}*/