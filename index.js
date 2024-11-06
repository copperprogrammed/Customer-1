function home() {
    document.getElementById("logo1").style.display = "flex";
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
}

function info1() {
    document.getElementById("logo1").style.display = "none";
    document.getElementById("info1").style.display = "block";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
}

function info2() {
    document.getElementById("logo1").style.display = "none";
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "block";
    document.getElementById("info3").style.display = "none";
}

function info3() {
    document.getElementById("logo1").style.display = "none";
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "block";
}