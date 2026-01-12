const password = "Epicode123";
const maxTrials = 3;

function input(userTrials) {
  return prompt(
    `Prova ad indovinare la password! (${userTrials} - ${maxTrials})`
  );
}

function risultato(userTrials) {
  if (userTrials < maxTrials)
    alert(
      `Hai vinto! Ci sei riuscito in ${userTrials} ${
        userTrials === 1 ? "tentativo" : "tentativi"
      }`
    );
  else alert("Hai perso.");
}

/**
 * Prova con ciclo Do While
 */

let trials = 0;

do {
  trials++;
  if (input(trials) === password) {
    break;
  }
} while (trials < maxTrials);

risultato(trials);

/**
 * Prova con ciclo While
 */

trials = 0;

while (trials < maxTrials) {
  trials++;
  if (input(trials) === password) {
    break;
  }
}

risultato(trials);

/**
 * Prova con ciclo For
 */

trials = 0;

for (i = 0; i < maxTrials; i++) {
  trials++;
  if (input(trials) === password) {
    break;
  }
}

risultato(trials);
