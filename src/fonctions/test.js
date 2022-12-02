// let divScripting = document.querySelector("#divScripting");
// let divHeatpad = document.querySelector("#divHeatpad");
// let divValider = document.querySelector("#divValider");
// let nbForm = 0;
// let lstActions = [];

// let positionHeatPad = []




// //Sert à créer une variable local qui contiendra toutes les données des gouttes :
// let datas = localStorage.getItem("allGouttes");
// if (!datas) {
//   console.log('Nouvelle liste crée');
//   localStorage.setItem('allGouttes', JSON.stringify([]));
//   localStorage.setItem('allGouttesFinal', JSON.stringify([]));
// } else {
//   datas = JSON.parse(datas);
// }
// // localStorage.setItem('allGouttes', JSON.stringify([{"x":5,"y":5,"name":"theOne","color":"red"},{"x":9,"y":1,"name":"theTwo","color":"blue"},{"x":1,"y":9,"name":"theThree","color":"green"},{"x":6,"y":6,"name":"theFour","color":"purple"},{"x":2,"y":2,"name":"theFifth","color":"yellow"},{"x":2,"y":7,"name":"theNine","color":"black"},{"x":1,"y":1,"name":"theTen","color":"white"}]))




// function scripting() {

// }



// function createNewForm() {
//   let option = ``;
//   if(datas){
//     for (let i = 0; i < datas.length; i++) {
//       option = option + `<option value="${datas[i].color}">${datas[i].color}</option>`;
//     }

//   }
//   divScripting.insertAdjacentHTML("beforeend", `
//     <div class="shadow-none p-3 mb-5 bg-light rounded deplacement" id="block_${nbForm}">
//       <p>Etape : ${nbForm} - Déplacement</p>
//       <label>Selectionner la goutte :</label>
//       <select id="selectGoutte_${nbForm}">
//           ${option}
//       </select>
//       <label>Coordonnée X :</label>
//       <input type="number" id="axeX_${nbForm}" name="axeX_${nbForm}" required>
//       <label>Coordonnée Y :</label>
//       <input type="number" id="axeY_${nbForm}" name="axeY_${nbForm}">
//     </div>
//     `);
//   nbForm++;
// }

// function createNewHeatPad() {
//   let option = ``;
//   if(datas){
//     for (let i = 0; i < datas.length; i++) {
//       option = option + `<option value="${datas[i].color}">${datas[i].color}</option>`;
//     }
//   }
//   divScripting.insertAdjacentHTML("beforeend", `
//     <div class="shadow-none p-3 mb-5 bg-light rounded heatpad" id="block_${nbForm}">
//       <p>Etape : ${nbForm} - HeatPad</p>
//       <label>Selectionner la goutte à déplacer :</label>
//       <select id="selectGoutte_${nbForm}">
//           ${option}
//       </select>
//       <label>Température (°C) : </label>
//       <input type="number" id="temperature_${nbForm}">
//       <label>Temps (s) :</label>
//       <input type="number" id="temps_${nbForm}">
//     </div>
//     `);
//   nbForm++;
// }


// function lancerSimulation(){
//   // let lesInput = 
//   // let lesSelect = 

//   for (let i = 0; i < nbForm; i++) {
//     var selectGoutte = document.getElementById(`selectGoutte_${i}`).value;
//     let axeX = "";
//     let axeY = "";
//     let temperature = "";
//     let temps = "";
//     let unObjet;
//     // console.log(selectGoutte.value)
//     let type = document.getElementById(`block_${i}`);
//     if(type.classList.contains('deplacement')){
//       // console.log('de');
//       axeX = document.getElementById(`axeX_${i}`).value;
//       axeY = document.getElementById(`axeY_${i}`).value;
//       unObjet = {"x": axeX, "y": axeY, "color" : selectGoutte}
//     }
//     if(type.classList.contains('heatpad')){
//       // console.log('h');
//       temperature = document.getElementById(`temperature_${i}`).value;
//       temps = document.getElementById(`temps_${i}`).value;
//       unObjet = {"temperature": temperature, "temps": temps, "color" : selectGoutte}
//     }

//     lstActions.push(unObjet);
//   }
//   // console.log(lstActions);
//   localStorage.setItem('allGouttesFinal', JSON.stringify(lstActions));
//   window.location.href = "simulation.html";

// }
