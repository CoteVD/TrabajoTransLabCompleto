goUser=()=>{
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