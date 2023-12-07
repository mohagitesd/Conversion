//TVA = Prix HT × (Taux de TVA / 100)
//TTC = Prix HT + TVA

let saisie = document.getElementById("saisie");
let deuxi = document.getElementById("deux");
let cinq = document.getElementById("cinq");
let dix = document.getElementById("dix");
let vingt = document.getElementById("vingt");
let resultTva = document.getElementById("resultTva");
let resultTtc = document.getElementById("resultTtc");

deuxi.onclick = function () {
    console.log("cccc");
    resultTva.innerHTML = Number((saisie.value) * 2.1 / 100);
    resultTtc.innerHTML = Number(saisie.value) + Number(resultTva.innerHTML);
}


cinq.onclick = function () {
    console.log("cccc");
    resultTva.innerHTML = Number((saisie.value) * 5.5 / 100);
    resultTtc.innerHTML = Number(saisie.value) + Number(resultTva.innerHTML);
}

dix.onclick = function () {
    console.log("cccc");
    resultTva.innerHTML = Number((saisie.value) * 10 / 100);
    resultTtc.innerHTML = Number(saisie.value) + Number(resultTva.innerHTML);
}

vingt.onclick = function () {
    console.log("cccc");
    resultTva.innerHTML = Number((saisie.value) * 20 / 100);
    resultTtc.innerHTML = Number(saisie.value) + Number(resultTva.innerHTML);
}


