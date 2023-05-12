import { initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
const tempMin = document.querySelector("#tempMin");
const hora = document.querySelector("#tempo")
const referencia = ref(getDatabase(), "Paciente/");


var temperaturas = {}
function update(snapshot){
  //(snapshot) =>{
    temperaturas = snapshot.val()

    temp.innerHTML = `
    <span >${temperaturas.temp + "º"}<span>
    `

    tempMax.innerHTML = `
    <p>${temperaturas.tempMax + "º"}<p>
    `

    tempMin.innerHTML = `
    <p>${temperaturas.tempMin + "º"}<p>
    `
    hora.innerHTML = `
    <p>${temperaturas.Hora + ":" + temperaturas.Mnts + ":" + temperaturas.Sgds}</p>
    `

  //}
}

function temperatura(){    
  var pegaTemps = onValue(referencia,update)
}

temperatura();