function alert (array) {
    console.log(array);
}
function compareNumber(a,b){
    return a-b;
}

function getPositiv (number) {
    return number>=0;
}
function getNegativ (number) {
    return number<=0;
}

var arr = [10,321,3123,-43,54,-65,23,-98,54,-33,44,-11,223,3,-6,9,-12,27,-34,78];

alert(arr);
arr.sort(compareNumber);
alert(arr);
arr.sort(compareNumber).reverse();
alert(arr);
var positArr = arr.filter(getPositiv).sort(compareNumber);
alert(positArr);
var negatiArr = arr.filter(getNegativ).sort(compareNumber).reverse()
alert(negatiArr);
