function nextScene() {
    document.getElementById("scene1").style.display = "none";
    document.getElementById("scene2").style.display = "block";
}

$(function () {
	$('#scene1title').textillate({
        loop: true,
        in:{
            effect: "flash",
            delayScale: 1.5, 
            delay: 100,
            shuffle: true, 
        },
        out:{
            effect: "bounce",
            delayScale: 1.5,
            delay: 100,
            // reverse: true,
            shuffle: true,
        }
    });
})


function goBack() {
    document.getElementById("scene2").style.display = "block";
    document.getElementById("scene3").style.display = "none";
    document.getElementById("scene4").style.display = "none";
    document.getElementById("scene5").style.display = "none";
    document.getElementById("pos").style.borderRadius = "0";
    document.getElementById("pos").style.backgroundColor = "#f2e9d8";
    document.getElementById("pos").style.opacity = "1";
    document.getElementById("nfc").style.borderRadius = "0";
    document.getElementById("nfc").style.backgroundColor = "#f2e9d8";
    document.getElementById("nfc").style.opacity = "1";
    document.getElementById("qr").style.borderRadius = "0";
    document.getElementById("qr").style.backgroundColor = "#f2e9d8";
    document.getElementById("qr").style.opacity = "1";

    document.getElementById('nfc1').classList.remove("active");
    document.getElementById('nfc2').classList.remove("active");
    document.getElementById('nfc3').classList.remove("active");
    document.getElementById('nfc4').classList.remove("active");
    document.getElementById('nfc5').classList.remove("active");
    document.getElementById('nfc6').classList.remove("active");
}

function backtostart() {
    document.getElementById("scene2").style.display = "none";
    document.getElementById("scene1").style.display = "block";
}

var card;
var phone;
var qrcode;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag1(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);
    // console.log(ev.target);

    if (ev.target.id === "card") {
        document.getElementById("pos").style.borderRadius = "20%";
        document.getElementById("pos").style.backgroundColor = "#d9bba9";
        document.getElementById("pos").style.opacity = "0.5";

    } 
}

function drag2(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);
    // console.log(ev.target);

    if (ev.target.id === "phone") {
        document.getElementById("nfc").style.borderRadius = "20%";
        document.getElementById("nfc").style.backgroundColor = "#d9bba9";
        document.getElementById("nfc").style.opacity = "0.5";
    } 
}

function drag3(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);
    // console.log(ev.target);

    if (ev.target.id === "qrcode") {
        document.getElementById("qr").style.borderRadius = "20%";
        document.getElementById("qr").style.backgroundColor = "#d9bba9";
        document.getElementById("qr").style.opacity = "0.5";
    }
}

// function dragEnter(ev) {
//     ev.dataTransfer.setData("dragImage",ev.target.id);
//     console.log(ev.target.id);

//     if (ev.target.id === "card") {
//         document.getElementById("pos").style.borderRadius = "20%";
//         document.getElementById("pos").style.backgroundColor = "#d9bba9";
//         document.getElementById("pos").style.opacity = "0.5";
//     } else if (ev.target.id === "phone") {
//         document.getElementById("nfc").style.borderRadius = "20%";
//         document.getElementById("nfc").style.backgroundColor = "#d9bba9";
//         document.getElementById("nfc").style.opacity = "0.5";
//     } else if (ev.target.id === "qrcode") {
//         document.getElementById("qr").style.borderRadius = "20%";
//         document.getElementById("qr").style.backgroundColor = "#d9bba9";
//         document.getElementById("qr").style.opacity = "0.5";
//     }
// }

function dragLeave(ev) {
    if (ev.target.id === "card") {
        document.getElementById("pos").style.borderRadius = "0";
        document.getElementById("pos").style.backgroundColor = "#f2e9d8";
        document.getElementById("pos").style.opacity = "1";
    } else if (ev.target.id === "phone") {
        document.getElementById("nfc").style.borderRadius = "0";
        document.getElementById("nfc").style.backgroundColor = "#f2e9d8";
        document.getElementById("nfc").style.opacity = "1";
    } else if (ev.target.id === "qrcode") {
        document.getElementById("qr").style.borderRadius = "0";
        document.getElementById("qr").style.backgroundColor = "#f2e9d8";
        document.getElementById("qr").style.opacity = "1";
    }
}

function dragEnter1(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);

    if (ev.target.id === "card") {
        document.getElementById("pos").style.borderRadius = "20%";
        document.getElementById("pos").style.backgroundColor = "#d9bba9";
        document.getElementById("pos").style.opacity = "0.5";

        document.getElementById("nfc").style.borderRadius = "0";
        document.getElementById("nfc").style.backgroundColor = "#f2e9d8";
        document.getElementById("nfc").style.opacity = "1";
        
        document.getElementById("qr").style.borderRadius = "0";
        document.getElementById("qr").style.backgroundColor = "#f2e9d8";
        document.getElementById("qr").style.opacity = "1";
    } 
}

function dragEnter2(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);

    if (ev.target.id === "phone") {
        document.getElementById("nfc").style.borderRadius = "20%";
        document.getElementById("nfc").style.backgroundColor = "#d9bba9";
        document.getElementById("nfc").style.opacity = "0.5";
        document.getElementById("pos").style.borderRadius = "0";
        document.getElementById("pos").style.backgroundColor = "#f2e9d8";
        document.getElementById("pos").style.opacity = "1";
        document.getElementById("qr").style.borderRadius = "0";
        document.getElementById("qr").style.backgroundColor = "#f2e9d8";
        document.getElementById("qr").style.opacity = "1";
    } 
}

function dragEnter3(ev) {
    ev.dataTransfer.setData("dragImage",ev.target.id);
    // console.log(ev.target.id);

    if (ev.target.id === "qrcode") {
        document.getElementById("qr").style.borderRadius = "20%";
        document.getElementById("qr").style.backgroundColor = "#d9bba9";
        document.getElementById("qr").style.opacity = "0.5";
        document.getElementById("pos").style.borderRadius = "0";
        document.getElementById("pos").style.backgroundColor = "#f2e9d8";
        document.getElementById("pos").style.opacity = "1";
        document.getElementById("nfc").style.borderRadius = "0";
        document.getElementById("nfc").style.backgroundColor = "#f2e9d8";
        document.getElementById("nfc").style.opacity = "1";
    }
}


function drop1(ev) {
      
    var data = ev.dataTransfer.getData("dragImage");
    // console.log(data);

    // document.getElementById(data).style.display = "none";

    if (data === "card") {
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene3").style.display = "block";
        document.getElementById("posgif").src = null;
        setTimeout(() => document.getElementById("posgif").src = "img/pos.gif", 10);
        // console.info('resetting img.src')
    } else {
        document.getElementById("pos").style.borderRadius = "0";
        document.getElementById("pos").style.backgroundColor = "#f2e9d8";
        document.getElementById("pos").style.opacity = "1";
        alert("Please drag the image to the correspoding area:)");
    }
}

function drop2(ev) {
    var data = ev.dataTransfer.getData("dragImage");

    if (data === "phone") {
        // console.log("nfc!!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene4").style.display = "block";
        document.getElementById("nfcgif").src = null;
        setTimeout(() => document.getElementById("nfcgif").src = "img/nfc.gif", 10);
        // console.info('resetting img.src')
    } else {
        document.getElementById("nfc").style.borderRadius = "0";
        document.getElementById("nfc").style.backgroundColor = "#f2e9d8";
        document.getElementById("nfc").style.opacity = "1";
        alert("Please drag the image to the correspoding area:)");
    }
}

function drop3(ev) {
    var data = ev.dataTransfer.getData("dragImage");
    if (data === "qrcode") {
        // console.log("qrcode!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene5").style.display = "block";
        document.getElementById("qrgif").src = null;
        setTimeout(() => document.getElementById("qrgif").src = "img/qr.gif", 10);
        // console.info('resetting img.src')
    } else {
        document.getElementById("qr").style.borderRadius = "0";
        document.getElementById("qr").style.backgroundColor = "#f2e9d8";
        document.getElementById("qr").style.opacity = "1";
        alert("Please drag the image to the correspoding area:)");
    }
}

function timelineHover1() {
    document.getElementById('dot1').style.backgroundColor = "#a68776";
    document.getElementById('sentence1').style.color = "#a68776";
    document.getElementById('choice1').style.color = "#735443";
    
    document.getElementById('sentence1').style.display = "block";
    document.getElementById('choice1').style.display = "block";

    $(function () {
        $('#choice1').textillate({
            loop: true,
            in:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            },
            out:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            }
        });
    })
}

function timelineLeave1() {
    document.getElementById("dot1").style.backgroundColor = "";
    document.getElementById('sentence1').style.color = "#f2e9d8";
    document.getElementById('choice1').style.color = "#f2e9d8";

    document.getElementById('sentence1').style.display = "none";
    document.getElementById('choice1').style.display = "none";
}

function timelineHover2() {
    document.getElementById('dot2').style.backgroundColor = "#a68776";
    document.getElementById('sentence2').style.color = "#a68776";
    document.getElementById('choice2').style.color = "#735443";

    document.getElementById('sentence2').style.display = "block";
    document.getElementById('choice2').style.display = "block";

    $(function () {
        $('#choice2').textillate({
            loop: true,
            in:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            },
            out:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            }
        });
    })    
}

function timelineLeave2() {
    document.getElementById("dot2").style.backgroundColor = "";
    document.getElementById('sentence2').style.color = "#f2e9d8";
    document.getElementById('choice2').style.color = "#f2e9d8";

    document.getElementById('sentence2').style.display = "none";
    document.getElementById('choice2').style.display = "none";
}

function timelineHover3() {
    document.getElementById('dot3').style.backgroundColor = "#a68776";
    document.getElementById('sentence3').style.color = "#a68776";
    document.getElementById('choice3').style.color = "#735443";

    document.getElementById('sentence3').style.display = "block";
    document.getElementById('choice3').style.display = "block";

    $(function () {
        $('#choice3').textillate({
            loop: true,
            in:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            },
            out:{
                effect: "tada",
                delayScale: 3, 
                // delay: 20,
                sync: true, 
            }
        });
    })
}

function timelineLeave3() {
    document.getElementById("dot3").style.backgroundColor = "";
    document.getElementById('sentence3').style.color = "#f2e9d8";
    document.getElementById('choice3').style.color = "#f2e9d8";

    // document.getElementById('dot3').style.display = "none";
    document.getElementById('sentence3').style.display = "none";
    document.getElementById('choice3').style.display = "none";
}



// posintro
var li_items1 = document.querySelectorAll(".accordion_wrap1 ul li");
// console.log(li_items1);
var ul1 = document.querySelector(".accordion_wrap1 ul");

li_items1.forEach(function(item){
	item.addEventListener("click", function(){
		li_items1.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul1.addEventListener("mouseleave", function(){
	li_items1.forEach(function(item){
		item.classList.remove("active");
	})
});

var li_items2 = document.querySelectorAll(".accordion_wrap2 ul li");
// console.log(li_items2);
var ul2 = document.querySelector(".accordion_wrap2 ul");

li_items2.forEach(function(item){
	item.addEventListener("click", function(){
		li_items2.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul2.addEventListener("mouseleave", function(){
	li_items2.forEach(function(item){
		item.classList.remove("active");
	})
});

// nfc
var li_items3 = document.querySelectorAll(".accordion_wrap3 ul li");
// console.log(li_items1);
var ul3 = document.querySelector(".accordion_wrap3 ul");

li_items3.forEach(function(item){
	item.addEventListener("click", function(){
		li_items3.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul3.addEventListener("mouseleave", function(){
	li_items3.forEach(function(item){
		item.classList.remove("active");
	})
});

var li_items4 = document.querySelectorAll(".accordion_wrap4 ul li");
// console.log(li_items2);
var ul4 = document.querySelector(".accordion_wrap4 ul");

li_items4.forEach(function(item){
	item.addEventListener("click", function(){
		li_items4.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul4.addEventListener("mouseleave", function(){
	li_items4.forEach(function(item){
		item.classList.remove("active");
	})
});

// qr
var li_items5 = document.querySelectorAll(".accordion_wrap5 ul li");
// console.log(li_items1);
var ul5 = document.querySelector(".accordion_wrap5 ul");

li_items5.forEach(function(item){
	item.addEventListener("click", function(){
		li_items5.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul5.addEventListener("mouseleave", function(){
	li_items5.forEach(function(item){
		item.classList.remove("active");
	})
});

var li_items6 = document.querySelectorAll(".accordion_wrap6 ul li");
// console.log(li_items2);
var ul6 = document.querySelector(".accordion_wrap6 ul");

li_items6.forEach(function(item){
	item.addEventListener("click", function(){
		li_items6.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul6.addEventListener("mouseleave", function(){
	li_items6.forEach(function(item){
		item.classList.remove("active");
	})
});



$(function () {
	$('#posguide').textillate({
        loop: true,
        in:{
            effect: "tada",
            delayScale: 30, 
            delay: 200,
            sync: true, 
        },
        out:{
            effect: "tada",
            delayScale: 10, 
            delay: 200,
            sync: true, 
        }
    });

    $('#qrguide').textillate({
        loop: true,
        in:{
            effect: "tada",
            delayScale: 30, 
            delay: 200,
            sync: true, 
        },
        out:{
            effect: "tada",
            delayScale: 10, 
            delay: 200,
            sync: true, 
        }
    });

    $('#nfcguide').textillate({
        loop: true,
        in:{
            effect: "tada",
            delayScale: 30, 
            delay: 200,
            sync: true, 
        },
        out:{
            effect: "tada",
            delayScale: 10, 
            delay: 200,
            sync: true, 
        }
    });


})



