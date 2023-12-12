const container = document.querySelector("#container");
const inputbars = document.querySelector(".input-bars");
// console.log(inputbars.value);
let n = '20';
inputbars.addEventListener('input', function(){
    n = inputbars.value;
})


const array = [];

// for(let i=0; i<n; i++) {
//      array[i] = Math.random();
// }

init()

function init() {
    
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  showbars();
}

function play() {
    const copy = [...array]
     const moves = bubbleSort(copy);
     animate(moves)
    //  showbars();
}

function animate(moves) {
    if (moves.length === 0) {
        showbars();
        return;
    };

    const move = moves.shift();
    const [i,j] = move.indices;
   

    if(move.type == "swap"){
       
        [array[i], array[j]] = [array[j], array[i]];

    }
    showbars(move);

    setTimeout(function () {
        animate(moves);
    }, 90);
}


function bubbleSort(array) {
    const moves = [];
    do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
            moves.push({indices:[i-1,i],type:"comp"});
          if (array[i - 1] > array[i]) {
            swapped = true;
            moves.push({indices:[i-1,i],type:"swap"});
            [array[i - 1], array[i]] = [array[i], array[i - 1]];
          }
        }
      } while (swapped);
      return moves;
}

function showbars(move) {
    container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");

    if(move && move.indices.includes(i)) {
      bar.style.backgroundColor =move.type=="swap"?"red":"blue";
    
  }
  container.appendChild(bar);
}
}


function reset(){
    location.reload();
}
