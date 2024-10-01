const btn = document.getElementsByClassName("ariana")[0];
let run = document.getElementsByClassName("run")[0];
btn.addEventListener("click", dog);

class Password {
    constructor() {
        console.log("HELLO");
        this.pass = "";
    }

    generatePassword(len) {
        let chars = "abcdefghijklmpqrstuvwxz";
        let numbers = "1234567890";
        let special = "!@$^&*"; 
        this.pass = "";

        if (len < 3) {
            console.log("ENTER A PROPER TEXT");
        } else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                i += 3;
            }
            return this.pass;
        }
    }
}

let p = new Password();

function dog(event) {
    event.preventDefault();
    run.innerHTML += p.generatePassword(7) + '<br>';
}
