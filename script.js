let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click",()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0px";
    }
}

function checkWin(){
    let winCondition = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let i = 0; i < winCondition.length; i++){
        let v0 = boxes[winCondition[i][0]].innerHTML;
        let v1 = boxes[winCondition[i][1]].innerHTML;
        let v2 = boxes[winCondition[i][2]].innerHTML;

        if(v0 !="" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " Win";
            document.querySelector("#play-again").style.display = "inline";

            for(j = 0; j,3; j++){
                boxes[winCondition[i][j]].style.backgroundColor = "#08d9d6"
                boxes[winCondition[i][j]].style.color = "#000"
            }
        }
    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e => {
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "O";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})








// let boxes = document.querySelectorAll(".box");
// let turn = "X";
// let isGameOver = false;

// // Function to display the result of each move
// function displayResult(result) {
//     document.querySelector("#results").innerHTML = result;
// }

// // Function to change turn and update the display accordingly
// function changeTurn() {
//     if (turn === "X") {
//         turn = "O";
//         document.querySelector(".bg").style.left = "85px";
//     } else {
//         turn = "X";
//         document.querySelector(".bg").style.left = "0px";
//     }
// }

// // Function to check for a win
// function checkWin() {
//     let winCondition = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8],
//         [0, 3, 6], [1, 4, 7], [2, 5, 8],
//         [0, 4, 8], [2, 4, 6]
//     ];

//     for (let i = 0; i < winCondition.length; i++) {
//         let v0 = boxes[winCondition[i][0]].innerHTML;
//         let v1 = boxes[winCondition[i][1]].innerHTML;
//         let v2 = boxes[winCondition[i][2]].innerHTML;

//         if (v0 !== "" && v0 === v1 && v0 === v2) {
//             isGameOver = true;
//             displayResult(`${turn} Wins!`);
//             document.querySelector("#play-again").style.display = "inline";

//             for (let j = 0; j < 3; j++) {
//                 boxes[winCondition[i][j]].style.backgroundColor = "#08d9d6";
//                 boxes[winCondition[i][j]].style.color = "#000";
//             }
//         }
//     }
// }

// // Function to check for a draw
// function checkDraw() {
//     if (!isGameOver) {
//         let isDraw = true;
//         boxes.forEach(e => {
//             if (e.innerHTML === "") isDraw = false;
//         });

//         if (isDraw) {
//             isGameOver = true;
//             displayResult("It's a Draw!");
//             document.querySelector("#play-again").style.display = "inline";
//         }
//     }
// }

// // Function to make a move for the computer (machine)
// function makeComputerMove() {
//     const emptyBoxes = Array.from(boxes).filter(e => e.innerHTML === "");
//     if (emptyBoxes.length > 0) {
//         const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
//         emptyBoxes[randomIndex].innerHTML = "O";
//         checkWin();
//         checkDraw();
//         changeTurn();
//     }
// }

// // Function to handle box click events
// function onBoxClick() {
//     if (!isGameOver && this.innerHTML === "") {
//         this.innerHTML = turn;
//         checkWin();
//         checkDraw();
//         changeTurn();

//         // Computer's move (simple random move)
//         if (!isGameOver && turn === "O") {
//             makeComputerMove();
//         }
//     }
// }

// // Initialize event listeners for box clicks
// boxes.forEach(e => {
//     e.innerHTML = "";
//     e.addEventListener("click", onBoxClick);
// });

// // Function to play against the machine
// function playAgainstMachine() {
//     document.querySelector("#play-against-machine").addEventListener("click", () => {
//         isGameOver = false;
//         turn = "X";
//         document.querySelector(".bg").style.left = "0px";
//         displayResult("");
//         document.querySelector("#play-again").style.display = "inline";

//         boxes.forEach(e => {
//             e.innerHTML = "";
//             e.style.removeProperty("background-color");
//             e.style.color = "#fff";
//         });

//         // Remove previous event listeners from boxes
//         boxes.forEach(e => e.removeEventListener("click", onBoxClick));

//         // Add new event listeners for player vs machine
//         boxes.forEach(e => {
//             e.addEventListener("click", onBoxClick);
//         });
//     });
// }

// // Event listener for the play again button
// document.querySelector("#play-again").addEventListener("click", () => {
//     isGameOver = false;
//     turn = "X";
//     document.querySelector(".bg").style.left = "0px";
//     displayResult("");
//     document.querySelector("#play-again").style.display = "none";

//     boxes.forEach(e => {
//         e.innerHTML = "";
//         e.style.removeProperty("background-color");
//         e.style.color = "#fff";
//     });
// });

// // Call the playAgainstMachine function to enable the player vs machine mode
// playAgainstMachine();
