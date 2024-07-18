const myBox1 = document.getElementById("box1");
const myBox2 = document.getElementById("box2");
const myBox3 = document.getElementById("box3");
const myBox4 = document.getElementById("box4");
const myBox5 = document.getElementById("box5");
const myBox6 = document.getElementById("box6");
const myBox7 = document.getElementById("box7");
const myBox8 = document.getElementById("box8");
const myBox9 = document.getElementById("box9");

const myMessage1 = document.getElementById("message1");
const myMessage2 = document.getElementById("message2");

const myBoxes = document.querySelectorAll(".container div");
myBoxes.forEach(item => item.addEventListener("click", drawOX));

function blueAlert() {
    myMessage1.classList.remove("noalert1");
    myMessage1.classList.add("alert1");
    setTimeout(() => {
    myMessage1.classList.remove("alert1");
    myMessage1.classList.add("noalert1");
    }, 1000);
}

function redAlert() {
    myMessage2.classList.remove("noalert2");
    myMessage2.classList.add("alert2");
    setTimeout(() => {
    myMessage2.classList.remove("alert2");
    myMessage2.classList.add("noalert2");
    }, 1000);
}

let move = 1;
let player;

function drawOX() {
    const myBox = this;

    if (myBox.innerHTML) {
        redAlert();
    } else {
        if (move % 2 !== 0) {
            player = "o";
        } else {
            player = "x";
        }

        myBox.innerHTML = player;
        move += 1;
        if (move === 10) {
            setTimeout(() => location.reload(), 500);
        }

        if ((myBox1.innerHTML === player && myBox2.innerHTML === player && myBox3.innerHTML === player) ||
        (myBox4.innerHTML === player && myBox5.innerHTML === player && myBox6.innerHTML === player) ||
        (myBox7.innerHTML === player && myBox8.innerHTML === player && myBox9.innerHTML === player) ||
        (myBox1.innerHTML === player && myBox4.innerHTML === player && myBox7.innerHTML === player) ||
        (myBox2.innerHTML === player && myBox5.innerHTML === player && myBox8.innerHTML === player) ||
        (myBox3.innerHTML === player && myBox6.innerHTML === player && myBox9.innerHTML === player) ||
        (myBox1.innerHTML === player && myBox5.innerHTML === player && myBox9.innerHTML === player) ||
        (myBox3.innerHTML === player && myBox5.innerHTML === player && myBox7.innerHTML === player)) {
            blueAlert();
            setTimeout(() => location.reload(), 1000);
        }
    }
}
