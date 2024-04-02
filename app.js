let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer =  document.querySelector(".msg-container");
let newGameBtn =  document.querySelector(".new-btn");
let msg =  document.querySelector("#msg");

let turn0 = true;


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      box.style.color = "blue";
      turn0 = false;
     
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});


const disableBoxes = () => {
    for(let box of boxes ){ 
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes ){ 
        box.disabled= false;
        box.innerText = "";
    }
};



const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let postion1val = boxes[pattern[0]].innerText;
    let postion2val = boxes[pattern[1]].innerText;
    let postion3val = boxes[pattern[2]].innerText;
    if (postion1val != "" && postion2val != "" && postion3val != "") {
      if (postion1val === postion2val && postion2val === postion3val) {
        // console.log("winner", postion1val)
        showWinner(postion1val);
      }
    }
  }
};
 
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);

 
