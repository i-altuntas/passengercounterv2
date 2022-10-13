let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")


if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}


let gecmisBilgi2 = localStorage.getItem("gecmisBilgi2")
let totalPeople = document.querySelector("#total-people");
if(gecmisBilgi2 !== null){
    totalPeople.textContent ="Total people:" + localStorage.getItem("gecmisBilgi2")
}else {
    totalPeople.textContent = ""
}



let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

let totalPeople_mevcut = 0;
if(gecmisBilgi2 === null){
    totalPeople_mevcut =0;

}else{
    totalPeople_mevcut=Number(gecmisBilgi2);
}

function total (){
    
    totalPeople_mevcut =totalPeople_mevcut + count;
    totalPeople.textContent="Total people: " + totalPeople_mevcut;
    localStorage.setItem( "gecmisBilgi2", totalPeople_mevcut)
}
///////////////////////////////////////////////////////////
function save() {
    total ();
    let countStr = count + " - ";
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    countEl.textContent = 0
    count = 0
}

