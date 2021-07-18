function calculator(a, param, b) {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw "Bad number!" + a+ " or " + b + " !!!";

        } else if (param != "+" && param != "-" && param != "*" && param != "/") {
            throw "Bad param";

        } else {

            switch (param) {
                case "+" : {
                    result = a + b;
                    break;
                }
                case "-" : {
                    result = a - b;
                    break;
                }
                case "*": {
                    result = a * b;
                    break;
                }
                case "/": {
                    result = a / b;
                    break;
                }

            }
            console.log(a + " " + param + " " + b + " = " + result)
        }
    } catch
        (error) {
        process.stdout.write(error);
    }
}
console.log("-----------------")
calculator("masha", "*", 25)
console.log("")
calculator(10, "+", "Tom")
console.log("\n")
calculator(10, "+", 15)
calculator(20, "-", 10)
calculator(2, "*", 5)
calculator(8, "/", 4)
console.log("----------------")
let a = 8;
let b = 2;
calculator(a, "+", b)
calculator(a, "-", b)
calculator(a, "*", b)
calculator(a, "/", b)
calculator(a, "s", b)
