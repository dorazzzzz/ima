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

$(function () {
	$('#scene1title').textillate({
        loop: true,
        in:{
            effect: "flash",
            delayScale: 3, 
            // delay: 20,
            shuffle: true, 
        },
        out:{
            effect: "bounce",
            delayScale: 5,
            // delay: 20,
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
        document.getElementById("pos").style.borderRadius = "20%";
        document.getElementById("pos").style.backgroundColor = "#d9bba9";
        document.getElementById("pos").style.opacity = "0.5";
    } else if (ev.target.id === "phone") {
        document.getElementById("nfc").style.borderRadius = "20%";
        document.getElementById("nfc").style.backgroundColor = "#d9bba9";
        document.getElementById("nfc").style.opacity = "0.5";
    } else if (ev.target.id === "qrcode") {
        document.getElementById("qr").style.borderRadius = "20%";
        document.getElementById("qr").style.backgroundColor = "#d9bba9";
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
        document.getElementById("posgif").src = null;
        setTimeout(() => document.getElementById("posgif").src = "img/pos.gif", 10);
        console.info('resetting img.src')
    } else if (data === "phone") {
        // console.log("nfc!!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene4").style.display = "block";
        document.getElementById("nfcgif").src = null;
        setTimeout(() => document.getElementById("nfcgif").src = "img/nfc.gif", 10);
        console.info('resetting img.src')
    } else if (data === "qrcode") {
        // console.log("qrcode!");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene5").style.display = "block";
        document.getElementById("qrgif").src = null;
        setTimeout(() => document.getElementById("qrgif").src = "img/qr.gif", 10);
        console.info('resetting img.src')
    }
}

function timelineHover1() {
    document.getElementById('dot1').style.backgroundColor = "#a68776";
    document.getElementById('sentence1').style.color = "#a68776";
    document.getElementById('choice1').style.color = "#a68776";

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
}

function timelineHover2() {
    document.getElementById('dot2').style.backgroundColor = "#a68776";
    document.getElementById('sentence2').style.color = "#a68776";
    document.getElementById('choice2').style.color = "#a68776";

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
}

function timelineHover3() {
    document.getElementById('dot3').style.backgroundColor = "#a68776";
    document.getElementById('sentence3').style.color = "#a68776";
    document.getElementById('choice3').style.color = "#a68776";

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
}



// posintro
var li_items = document.querySelectorAll(".accordion_wrap ul li");
var ul = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
	item.addEventListener("click", function(){
		li_items.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul.addEventListener("mouseleave", function(){
	li_items.forEach(function(item){
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



