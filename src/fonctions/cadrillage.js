//Recuperation de la div dons l'id est grille :
let divGrille = document.querySelector('#grille');

//Création de l'affichage :
let newDivCase = "<div id='case'></div>";

//Remplissage de la div dons l'id est grille avec 100x newDivCase :
divGrille.innerHTML = newDivCase.repeat(100);


let allDivCases = document.querySelectorAll('#case');
//Placement du heatPad :
allDivCases[8].style.backgroundColor = "#FD7153";
allDivCases[9].style.backgroundColor = "#FD7153";
allDivCases[18].style.backgroundColor = "#FD7153";
allDivCases[19].style.backgroundColor = "#FD7153";
