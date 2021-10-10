function check() {
    var surname = $('#Surname').val();
    var name = $('#Name').val();
    var age = $('#Age').val();
    var address = $('#Address').val();

    if (surname && name && (age > 0 && age <= 100) && address) {
        $('#AjaxGET').prop("disabled", false);
        $('#AjaxPOST').prop("disabled", false);
    } else {
        $('#AjaxGET').prop("disabled", true);
        $('#AjaxPOST').prop("disabled", true);
    }
}

function sendDataByGetMethod() {
    var userData = {
        Surname: $('#Surname').val(),
        Name: $('#Name').val(),
        Age: $('#Age').val(),
        Address: $('#Address').val()
    };

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/userGet?Surname=" + userData.Surname + "&Name="
            + userData.Name + "&Age=" + userData.Age + "&Address="
            + userData.Address,

    });
}

function sendDataByPostMethod() {
    var userData2 = {
        userSurname : $("#Surname").val(),
        userName : $("#Name").val(),
        userAge : $("#Age").val(),
        userAddress : $("#Address").val()
    };

    $.ajax({
        type: "POST",
        data: JSON.stringify(userData2),
        contentType: "application/json",
        url: "/userPost",

    });
}



