
function check() {
    var surname = document.getElementById("Surname").value;
    var name = document.getElementById("Name").value;
    var age = document.getElementById("Age").value;
    var address = document.getElementById("Address").value;

    if (surname && name && (age > 0 && age <= 100) && address) {

        document.getElementById("AjaxGET").disabled = false;
        document.getElementById("AjaxPOST").disabled = false;
    } else {

        document.getElementById("AjaxGET").disabled = true;
        document.getElementById("AjaxPOST").disabled = true;
    }
}



function sendDataByGetMethod() {
    var userData = {
        userSurname : document.getElementById("Surname").value,
        userName : document.getElementById("Name").value,
        userAge : document.getElementById("Age").value,
        userAddress : document.getElementById("Address").value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/userGet?Surname=" + userData.userSurname + "&Name="
        + userData.userName + "&Age=" + userData.userAge + "&Address="
        + userData.userAddress);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function sendDataByPostMethod() {
    var userData = {
        userSurname : document.getElementById("Surname").value,
        userName : document.getElementById("Name").value,
        userAge : document.getElementById("Age").value,
        userAddress : document.getElementById("Address").value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/userPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
}



