function trafficLight() {
    let DOMDivs = document.querySelectorAll("div"),
        checktedClass = "";

    for(let i = 0; i < DOMDivs.length; i++) {
        if(DOMDivs[i].classList.value != "") {
            checktedClass = DOMDivs[i].classList.value;
            break;  
        }
    }

    switch(checktedClass) {
        case "red":
            DOMDivs[0].classList.value = "";
            DOMDivs[1].classList.value = "yellow";
            break;
        
        case "yellow":
            DOMDivs[1].classList.value = "";
            DOMDivs[2].classList.value = "green";
            break;
        
        case "green":
            DOMDivs[2].classList.value = "";
            DOMDivs[0].classList.value = "red";
            break;

        default:
            break;
    }
}

let btnTrL = document.querySelector("#btnTrL");
btnTrL.addEventListener("click", trafficLight);

let openWind = document.querySelector("#openWind"),
    closeWind = document.querySelector("#closeWind");

openWind.addEventListener("click", function() {
    let modWin = document.querySelector(".bg");
    modWin.style.display = "flex";
});

closeWind.addEventListener("click", function() {
    let clWind = document.querySelector(".bg");
    clWind.style.display = "none";
});


