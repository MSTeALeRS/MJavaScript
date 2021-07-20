var product = [10, 2, 8, 41, 35, 65, 74, 83, 18, 29];

console.log("Last number = " + product[product.length - 1]);

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (styles[i] == value) {
            return console.log(i + " is Style number ");
        }
    }
    return console.log("-1, Don't find " + value);
}
function filterRange(arr, a, b) {
 var newArr =arr.slice(a-1,b);
return  console.log(newArr);
}


var styles = ['Jaz', 'Bluze'];
console.log(styles);

styles.push("Rock'n'Rol");
console.log(styles);
styles.splice(-2, 1, 'Classic');
console.log(styles);
console.log(styles[0])
styles.splice(0, 1);
console.log(styles);
styles.splice(0, 0, 'Pop', 'Reggy');
console.log(styles);

find(styles, 'Popi')

filterRange(product, 3,8);

var st = "My-short-string";

function camelize(arr) {
  var arr2 = arr.split("-")

    for (let i = 0; i <arr2.length; i++) {
        arr2[i] = arr2[i][0].toUpperCase()+arr2[i].slice(1);
    }
var arr3 = arr2.join("")
    return console.log(arr +" ----->> " +arr3);
}

camelize(st)
