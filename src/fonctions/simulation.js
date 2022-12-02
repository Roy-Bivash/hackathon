let lesGoutes = JSON.parse(localStorage.getItem("allGouttes"));
let allGouttesFinal = JSON.parse(localStorage.getItem("allGouttesFinal"));
let btnStartSimulation = document.getElementById('btnStartSimulation');
const positionInitial = JSON.parse(localStorage.getItem("allGouttes"));
let coordonneHeatPad = [
  {
    "libre": true,
    "x": 8,
    "y": 0
  },
  {
    "libre": true,
    "x": 9,
    "y": 0
  },
  {
    "libre": true,
    "x": 8,
    "y": 1
  },
  {
    "libre": true,
    "x": 9,
    "y": 1
  }
];


console.log(lesGoutes)
console.log(allGouttesFinal)

let divGoutes = document.querySelector('#lesGoutes');

function simulation() {
  if (lesGoutes) {
    createGouttes();
  } else {
    alert('Pas de goutte ajouté')
  }
}


//Ajoute les gouttes sur l'interface graphique :
function createGouttes() {
  for (let i = 0; i < lesGoutes.length; i++) {
    var nom = lesGoutes[i].color;
    var positionX = (lesGoutes[i].x * 50);
    var positionY = (lesGoutes[i].y * 50);

    divGoutes.insertAdjacentHTML("beforeend", `<div class="goute" id="goute_${i}" style="background-color:${nom}; left:${positionX}px; top:${positionY}px;"></div>`)
  }
}

btnStartSimulation.addEventListener('click', () => {
  listenToChange()
})



//Cette fonction verifie quels gouttes doivent etre deplacer
//Puis lance le processus de deplacement
function listenToChange() {
  let nbDeplacementAEffectuer = allGouttesFinal.length;

  while (nbDeplacementAEffectuer > 0) {
    for (let i = 0; i < lesGoutes.length; i++) {
      for (let j = 0; j < allGouttesFinal.length; j++) {
        if (lesGoutes[i].color == allGouttesFinal[j].color) {

          //Verfier si c'est un deplacement ou mise sur un heatPad
          if (allGouttesFinal[j].x) {
            // Ici seul les gouttes avec de nouvelle coordonnées seront mise à jour :
            console.log("un deplacement")
            createDeplacementGoutte(lesGoutes[i], allGouttesFinal[j], i);
          } else {
            // Ici la goutte se deplace sur le heatPad et revient à sa position initial :
            console.log("un deplacement sur heatpad")

            createDeplacementHeatPad(lesGoutes[i], allGouttesFinal[j], allGouttesFinal[j].temps, allGouttesFinal[j].temperature, i)
          }
        } //fermeture if
      } //fermeture for j
    } //fermeture for i

    // console.log(nbDeplacementAEffectuer)
    nbDeplacementAEffectuer--;
  }//Fermeture while
}

// fonction qui permet de mettre un délai dans les fonctions async
function timer(t) {
  return new Promise(r => setTimeout(r, t));
}


//Cette fonction réalise le deplacement case par case
//Cette fonction ecrase les valeur de la viraible lesGoutes avec les nouvelles positions
async function createDeplacementGoutte(oldPositionGoutte, newPositionGoutte, nbGoutte) {
  oldPositionGoutte.x = parseInt(oldPositionGoutte.x);
  oldPositionGoutte.y = parseInt(oldPositionGoutte.y);
  // console.log(oldPositionGoutte.x)
  while (oldPositionGoutte.y > newPositionGoutte.y) {
    oldPositionGoutte.y = oldPositionGoutte.y - 1;
    lesGoutes[nbGoutte].y = oldPositionGoutte.y;
    verifGoutteFusion(lesGoutes[nbGoutte].x, lesGoutes[nbGoutte].y, nbGoutte)
    await timer(100);
    updateVisual(nbGoutte)
    // console.log(oldPositionGoutte.y)
  }
  while (oldPositionGoutte.y < newPositionGoutte.y) {
    oldPositionGoutte.y = oldPositionGoutte.y + 1;
    lesGoutes[nbGoutte].y = oldPositionGoutte.y;
    verifGoutteFusion(lesGoutes[nbGoutte].x, lesGoutes[nbGoutte].y, nbGoutte)
    await timer(100);
    updateVisual(nbGoutte)
    // console.log(oldPositionGoutte.y)
  }
  while (oldPositionGoutte.x > newPositionGoutte.x) {
    oldPositionGoutte.x = oldPositionGoutte.x - 1;
    lesGoutes[nbGoutte].x = oldPositionGoutte.x;
    verifGoutteFusion(lesGoutes[nbGoutte].x, lesGoutes[nbGoutte].y, nbGoutte)
    await timer(100);
    updateVisual(nbGoutte)
    // console.log(oldPositionGoutte.x)
  }
  while (oldPositionGoutte.x < newPositionGoutte.x) {
    oldPositionGoutte.x = oldPositionGoutte.x + 1;
    lesGoutes[nbGoutte].x = oldPositionGoutte.x;
    verifGoutteFusion(lesGoutes[nbGoutte].x, lesGoutes[nbGoutte].y, nbGoutte)
    await timer(100);
    updateVisual(nbGoutte)
    // console.log(oldPositionGoutte.x)
  }
}


//Cette fonction réalise le deplacement d'une goutte sur un heatpad
//Laisser la goutte decu pendant un temps donné
//Puis sa la remet à son ancienne position
async function createDeplacementHeatPad(depart, newPositionGoutte, temps, temperature, nbGoutte) {
  let heatpadAUtiliser = coordonneHeatPad[0];
  for (let i = 0; i < coordonneHeatPad.length; i++) {
    if (coordonneHeatPad[i].libre) {
      heatpadAUtiliser = coordonneHeatPad[i];
      coordonneHeatPad[i].libre = false;
    } // fin du if
  } // fin du for
  createDeplacementGoutte(depart, { "x": heatpadAUtiliser.x, "y": heatpadAUtiliser.y }, nbGoutte);
  await timer(temps * 1000);
  console.log('revenir')
  let theGoutte = document.getElementById(`goute_${nbGoutte}`);
  theGoutte.style.backgroundColor = "brown";

  createDeplacementGoutte({ "x": heatpadAUtiliser.x, "y": heatpadAUtiliser.y }, positionInitial[nbGoutte], nbGoutte);
}



//Cette fonction permet de mettre à jour la partie graphique avec les coordonnées de la liste lesGoutes
function updateVisual(nbGoutte) {
  let theGoutte = document.getElementById(`goute_${nbGoutte}`);
  var newPositionX = (lesGoutes[nbGoutte].x * 50);
  var newPositionY = (lesGoutes[nbGoutte].y * 50);
  theGoutte.style.left = newPositionX + "px";
  theGoutte.style.top = newPositionY + "px";
}


//Verifier si deux gouttes proche se raproche sufisament pour en former plus qu'une
function verifGoutteFusion(positionX, positionY, nbGoutte) {
  for (let i = 0; i < lesGoutes.length; i++) {
    let verifTop = Boolean(parseInt(lesGoutes[i].y) + 1 == parseInt(positionY));
    let verifbottom = Boolean(parseInt(lesGoutes[i].y) - 1 == parseInt(positionY));
    let verifLeft = Boolean(parseInt(lesGoutes[i].x) + 1 == parseInt(positionX));
    let verifRight = Boolean(parseInt(lesGoutes[i].x) - 1 == parseInt(positionX));
    let alignX = parseInt(positionX) == parseInt(lesGoutes[i].x);
    let alignY = parseInt(positionY) == parseInt(lesGoutes[i].y);

    if (verifTop && alignX) {
      let theGoutte = document.getElementById(`goute_${nbGoutte}`);
      theGoutte.style.backgroundColor = lesGoutes[i].color;
      console.log("fusion A");
    }
    if (verifbottom && alignX) {
      let theGoutte = document.getElementById(`goute_${nbGoutte}`);
      theGoutte.style.backgroundColor = lesGoutes[i].color;
      
      console.log("fusion B");
    }
    if (verifLeft && alignY) {
      let theGoutte = document.getElementById(`goute_${nbGoutte}`);
      theGoutte.style.backgroundColor = lesGoutes[i].color;
      console.log("fusion C");
    }
    
    if (verifRight && alignY) {
      let theGoutte = document.getElementById(`goute_${nbGoutte}`);
      theGoutte.style.backgroundColor = lesGoutes[i].color;
      console.log("fusion D");
    }


  }


}