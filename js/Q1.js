let saisie = document.getElementById("saisie");
const btn = document.getElementById("btnConv");
const result = document.getElementById("result");

btn.onclick = function () {
    // console.log("coucou");
    result.innerHTML = Number(saisie.value * 0.9144); //* Number(0.9144);

}
