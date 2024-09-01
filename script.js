const pieces = document.getElementsByClassName(`piece`)
const whitePawns = document.getElementsByClassName(`w-pawn`)

document.addEventListener(`click`, (e) => {
  const piece = e.target
  console.log(piece);
  
  if(piece.classList.contains('w-pawn')){
    piece.classList.toggle(`selected`)
  }
})