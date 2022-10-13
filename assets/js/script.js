const container = document.querySelector('.container');
const limit = 100;

for(let i = 1; i <= limit; i++){
  // CREO IL DIV
  const box  =  document.createElement('div');

  // AGGIUNGO CLASSE ms-box
  box.className = 'ms-box';

  // SCRIVO DENTRO IL DIV
  box.innerHTML = i;
  container.append(box);
}