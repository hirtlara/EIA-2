    var k : string ="";
        
    function main() {
        var k = prompt("Gib deinen Namen ein");
        var node : any = document.getElementById("inhalt");
        node.innerHTML += "Hi ";
        node.innerHTML += k;
        node.innerHTML += ", ich grueße dich!";
        console.log("Hallo",k,", willkommen im Kurs!");
        }
    
    document.addEventListener('DOMContentLoaded',main);
