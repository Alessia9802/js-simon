/* 
Un alert() espone 5 numeri generati casualmente.
- Da li parte un timer di 30 secondi.
- Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
- L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.
 */

function fiveNumbers() {
  /* console.log(n); */
  let str = "";
  for (var i = 0; i < 5; i++) {
    let n = parseInt(Math.floor(Math.random() * 100 + 1));
    if (i > 0) {
      str += ",";
    }
    str += n;
  }
  alert(str);
}

fiveNumbers();

// Utilizzo SetTimeOut perchè dopo 30 secondi l'utente inserire attraverso un ciclo for per cinque volte un numero con il prompt.
// Strumenti : SetTimeOut, Ciclo for e prompt

setTimeout(myFunction, 3000); // 3 secondi

function myFunction() {
  for (let i = 0; i < 5; i++) {
    const numUser = parseInt(prompt("Inserisci un numero"));
    console.log(numUser);
    // Utilizzare condizione if per verificare se i numeri inseriti dall'utente combaciano con quelli generati dal computer
  }
  if (numUser == fiveNumbers) {
    console.log("true");
  } else {
    console.log("false");
  }
}
