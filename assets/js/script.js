/* 
Un alert() espone 5 numeri generati casualmente.
- Da li parte un timer di 30 secondi.
- Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
- L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.
 */

function fiveNumbers() {
  let n = parseInt(1);
  /* console.log(n); */
  if (n > 0 && n <= 100) {
    str = "";
    for (var i = 0; i <= 5; i++) {
      num = Math.round(Math.random() * 100 + 1);
      if (i > 0) {
        str += ",";
      }
      str += num;
    }
    alert(Math.round(Math.random()) * 100 + 1);
  } else {
    console.log("non funziona");
  }
}

fiveNumbers();

for (let i = 1; i < 6; i++) {
  console.log(i);
}
