let admin;
let name = "John";
admin = name;
console.log(admin);
console.log("\n");

let login = "Admin";
let password = "TheMaster";

if (login == "Admin") {
    console.log("Hello")
    console.log("Password??")
    if (password == "TheMaster") {
        console.log("Welcome")
    } else if (password == "other") {
        console.log("Wrong password")
    } else {
        console.log("Canceled.")
    }


} else if (login == "other") {
    console.log("I don`t now you")
} else {
    console.log("Canceled.")
}
console.log("\n");
switch (login) {
    case "Admin" : {
        console.log("Hello")
        console.log("Press password")
        switch (password) {
            case "TheMaster": {
                console.log("Welcome")
                break;
            }
            case "Other" : {
                console.log("Wrong password")
                break;
            }
            case "Canceled" : {
                console.log("Cancel!!")
                break;
            }
        }
        break;
    }
    case "other": {
        console.log("Who are you??")
        break;
    }
    case "Cancel" : {
        console.log("bye bye")
        break;
    }
}