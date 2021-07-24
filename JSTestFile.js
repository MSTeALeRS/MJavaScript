function AddText(){

    var contenElements = document.getElementsByTagName('li');

    for (var i = 0; i < contenElements.length; i++) {
contenElements[i].innerText = "New text";

    }
    alert("Text added");
console.log("added " + contenElements.length + " elements");
}
function RedColor(){
var newColor = document.getElementsByTagName("a")
    for (var i = 0; i <newColor.length ; i++) {
        if (newColor[i].innerText.includes("http")|| newColor[i].innerText.includes("ftp")) {
            newColor[i].classList.add("external-red");
        }
console.log("red color added")
    }
}