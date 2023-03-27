console.log("läuft");

// Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.


const randomNum1_10 = Math.floor(Math.random() * 11)+1;
// console.log(randomNum1_10);

inputNum = prompt("Schätze eine Nummer zwischen 1-10 :)");
 if (Number(inputNum) === randomNum1_10) {
    console.log("Du hast gewonnen! :)");
 } else {
    console.log(`Du hast verloren :(. Die Nummer lautet ${randomNum1_10}.`);
 }