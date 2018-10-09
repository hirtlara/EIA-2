function main() {
    var k = prompt("Gib deinen Namen ein");
    var node: any = document.getElementById("inhalt");
    var i: string = "";
    i += "Hi ";
    i += k;
    i += ", ich grueße dich!";
    console.log(i);
    
}

document.addEventListener('DOMContentLoaded', main);
