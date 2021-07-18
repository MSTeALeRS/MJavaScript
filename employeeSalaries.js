

var employes = {
    "+31231":"emp1",
    "2131231":"emp2",
    "321":"emp3",
    "5345":"emp4",
    "":"emp5",
    "":"emp6",
    "2434":"emp7",
    "645":"emp8",
    "7567":"emp9",
    "423":"emp10"


};


for (var employe in employes) {
    if(employe== "") {
        employe = "0"
    }
        console.log(employe)


}