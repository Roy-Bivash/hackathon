let divLesGouttes = document.getElementById('divLesGouttes');
let btnAjout = document.getElementById('btnValider');
let btnTermine = document.getElementById('btnTermine');
let lstNewGouttes = [];

btnAjout.addEventListener('click', () => {
  let positionX = document.getElementById('inputPositionX').value;
  let positionY = document.getElementById('inputPositionY').value;
  let colorText = document.getElementById('inputCouleur').value;
  setNewGoutte(positionX, positionY, colorText);
})

function createNewVisual(positionX, positionY, colorText) {
  return (`
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
      <p>
      Color : ${colorText} - Position X : ${positionX} - Position Y : ${positionY}
      </p>
    </div>
  `);
}

// Ajoute une nouvelle goutte
function setNewGoutte(positionX, positionY, colorText) {
  if (positionX > 9 || positionY > 9 || positionX < 0 || positionY < 0) {
    alert('hors de porté');
  } else {
    divLesGouttes.insertAdjacentHTML('beforeend', createNewVisual(positionX, positionY, colorText));
    lstNewGouttes.push({
      "x": positionX,
      "y": positionY,
      "color": colorText
    });
    console.log(lstNewGouttes);
  }
}


btnTermine.addEventListener('click', () => {
  localStorage.setItem("allGouttes", JSON.stringify(lstNewGouttes));
  window.location.href = "./scripting.html";
})