var cs = 1;

function nextScene() {
	if (cs === 5) {
		document.getElementById("scene5").style.display = "none";
		cs = 1;
		document.getElementById("scene1").style.display = "block";
	} else if (cs < 5){
		document.getElementById("scene" + cs).style.display = "none";
		document.getElementById("scene" + (cs + 1) ).style.display = "block";
		cs = cs + 1;
	}
}

function goBack() {
    document.getElementById("scene2").style.display = "block";
    document.getElementById("scene3").style.display = "none";
    document.getElementById("scene4").style.display = "none";
    document.getElementById("scene5").style.display = "none";
    document.getElementById("pos").style.borderRadius = "0";
    document.getElementById("pos").style.backgroundColor = "#6593a6";
    document.getElementById("pos").style.opacity = "1";
    document.getElementById("nfc").style.borderRadius = "0";
    document.getElementById("nfc").style.backgroundColor = "#6593a6";
    document.getElementById("nfc").style.opacity = "1";
    document.getElementById("qr").style.borderRadius = "0";
    document.getElementById("qr").style.backgroundColor = "#6593a6";
    document.getElementById("qr").style.opacity = "1";
}

var card;
var phone;
var qrcode;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    console.log(ev.target.id);

    if (ev.target.id === "card") {
        document.getElementById("pos").style.borderRadius = "30%";
        document.getElementById("pos").style.backgroundColor = "#f2f2f2";
        document.getElementById("pos").style.opacity = "0.5";
    } else if (ev.target.id === "phone") {
        document.getElementById("nfc").style.borderRadius = "30%";
        document.getElementById("nfc").style.backgroundColor = "#f2f2f2";
        document.getElementById("nfc").style.opacity = "0.5";
    } else if (ev.target.id === "qrcode") {
        document.getElementById("qr").style.borderRadius = "30%";
        document.getElementById("qr").style.backgroundColor = "#f2f2f2";
        document.getElementById("qr").style.opacity = "0.5";
    }
}

function drop(ev) {
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("dragImage");
    // console.log(data);

    // document.getElementById(data).style.display = "none";

    if (data === "card") {
        // console.log("pos!");
        // ev.target.appendChild(document.getElementById("card"));
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene3").style.display = "block";
        // cardcount = cardcount + 1;
        // console.log(cardcount);
    } else if (data === "phone") {
        // console.log("nfc!!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene4").style.display = "block";
    } else if (data === "qrcode") {
        // console.log("qrcode!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene5").style.display = "block";
    }
}

let stack1 = document.querySelector(".stack1");

[...stack1.children].reverse().forEach(i => stack1.append(i));

stack1.addEventListener("click", swap);

function swap(ev) {
    let card1 = document.querySelector(".card1:last-child");
    if (ev.target !== card1) return;
    card1.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card1.style.animation = "";
        stack1.prepend(card1);
    }, 700);
}