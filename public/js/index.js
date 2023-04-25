import { initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, onValue,get} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAZiECJYQU6ETtTb-QfpsEMkswAKhaCVCM",
  authDomain: "monitordetemperatura-ab3b0.firebaseapp.com",
  databaseURL: "https://monitordetemperatura-ab3b0-default-rtdb.firebaseio.com",
  projectId: "monitordetemperatura-ab3b0",
  storageBucket: "monitordetemperatura-ab3b0.appspot.com",
  messagingSenderId: "1000933723867",
  appId: "1:1000933723867:web:6e56a2c0b93994609b46fe"
};
const temp = document.querySelector("#temp");
const tempMax = document.querySelector("#tempMax");
const tempMin = document.querySelector("#tempMin");
const app = initializeApp(firebaseConfig);
const referencia = ref(getDatabase(), "Paciente/");



function temperatura(){    
  var pegaTemps = onValue(referencia,(snapshot) =>{
    var temperaturas = {}

    temp.innerHTML = `
    <span >${snapshot.val()['temp'] + "º"}<span>
    `

    tempMax.innerHTML = `
    <p>${snapshot.val()['tempMax'] + "º"}<p>
    `

    tempMin.innerHTML = `
    <p>${snapshot.val()['tempMin'] + "º"}<p>
    `
  })
  
}

temperatura();