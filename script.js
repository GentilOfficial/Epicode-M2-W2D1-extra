const password = "Epicode123";

let userTry = 0;

do {
  let prova = prompt(`Prova ad indovinare la password! (${userTry} - 3)`);
  if (prova === password) {
    break;
  }
  userTry++;
} while (userTry < 3);

if (userTry < 3) alert("Hai vinto!");
else alert("Hai perso.");
