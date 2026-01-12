const password = "Epicode123";

let userTry = 0;

do {
  userTry++;
  let prova = prompt(`Prova ad indovinare la password! (${userTry} - 3)`);
  if (prova === password) {
    break;
  }
} while (userTry < 3);

if (userTry < 3)
  alert(
    `Hai vinto! Ci sei riuscito in ${userTry} ${
      userTry === 1 ? "tentativo" : "tentativi"
    }`
  );
else alert("Hai perso.");
