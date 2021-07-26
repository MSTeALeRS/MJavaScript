
hidetext.onclick = function () {

    var visibilyty = textVisib.style.visibility;
    if (visibilyty == "") {
        textVisib.style.visibility = "hidden";

    } else {
        textVisib.style.visibility = "";
    }
}
hidebutton.onclick = function () {
    hidebutton.style.visibility = "hidden";

    setTimeout(function (){
        hidebutton.style.visibility = "";
    }, 2000);
}

hideT.onclick = function () {
    var elements = document.querySelectorAll("li");
    var visibilyty = elements[0].style.visibility;
    for (let i = 0; i < elements.length; i++) {
        if (visibilyty == "") {
            elements[i].style.visibility = "hidden";
            block.style.height = "17.5px";
        } else {
            elements[i].style.visibility = "";
            block.style.height = "70px";
        }
    }

}