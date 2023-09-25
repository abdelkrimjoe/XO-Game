let items = document.querySelectorAll(".item");
let ternText = document.querySelector(".turn");
let tern = "x";

let reste = document.querySelector(".restBtn");
items.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerText == "") {
      if (tern == "x") {
        el.innerText = "X";
        ternText.innerText = "O tern";
        tern = "o";
      } else {
        el.innerText = "O";
        ternText.innerText = "X tern";
        tern = "x";
      }
      resultat(items);
    }
  });
});
reste.addEventListener("click", () => {
  items.forEach((el) => {
    el.innerText = "";
    ternText.innerText = "X tern";
  });
});

let resultat = (array) => {
  let index = -1;
  if (
    array[0].innerText === array[1].innerText &&
    array[1].innerText === array[2].innerText &&
    array[1].innerText != ""
  ) {
    index = 1;
  }
  else if (
    array[3].innerText === array[4].innerText &&
    array[4].innerText === array[5].innerText &&
    array[3].innerText != ""
  ) {
    index = 4;
  }
  else if (
    array[6].innerText === array[7].innerText &&
    array[7].innerText === array[8].innerText &&
    array[6].innerText != ""
  ) {
    index = 8;
  }

  else if (
    array[0].innerText === array[3].innerText &&
    array[3].innerText === array[6].innerText &&
    array[0].innerText != ""
  ) {
    index = 3;
  }
  else if (
    array[1].innerText === array[4].innerText &&
    array[4].innerText === array[7].innerText &&
    array[1].innerText != ""
  ) {
    index = 7;
  }
  else if (
    array[2].innerText === array[5].innerText &&
    array[5].innerText === array[8].innerText &&
    array[2].innerText != ""
  ) {
    index = 5;
  }

  else if (
    array[0].innerText === array[4].innerText &&
    array[4].innerText === array[8].innerText &&
    array[0].innerText != ""
  ) {
    index = 0;
  }
  else if (
    array[2].innerText === array[4].innerText &&
    array[4].innerText === array[6].innerText &&
    array[2].innerText != ""
  ) {
    index = 2;
  }
else{
    let tr=false
    array.forEach(element => {
        if(element.innerText===""){
            tr=true
        }
    });
    if (tr===false) index=9
}
  switch (index) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 7:
    case 8:
        alert(`${array[index].innerText} à gagner`);
        items.forEach((el) => {
            el.innerText = "";
            ternText.innerText = "X tern";
          });

        break;
   case 9:
        alert(`It's Draw`) 
        items.forEach((el) => {
            el.innerText = "";
            ternText.innerText = "X tern";
          }); 
        break;   

  }
};
