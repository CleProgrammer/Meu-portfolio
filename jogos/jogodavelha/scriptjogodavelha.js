const c = (cl) => document.querySelector(cl)

let winner = false
let stepOne = 1
let cont = 9
let letraXO = ''
let vencedor = [[c('.pos1'), c('.pos2'), c('.pos3')], [c('.pos4'), c('.pos5'), c('.pos6')], [c('.pos7'), c('.pos8'), c('.pos9')],
[c('.pos1'), c('.pos4'), c('.pos7')], [c('.pos2'), c('.pos5'), c('.pos8')], [c('.pos3'), c('.pos6'), c('.pos9')], [c('.pos1'), c('.pos5'), c('.pos9')], 
[c('.pos3'), c('.pos5'), c('.pos7')]]

function clicar(tecla) {
  let all = document.querySelector(`${tecla}`)
  if(letraXO === '') {

  } else {
    cont --
    if(all.innerHTML == 'X' || all.innerHTML == 'O') {
      if(letraXO == 'X') {
        letraXO = 'O'
      } else {
        letraXO = 'X'
      }
    } else {
      all.innerHTML = letraXO
      all.style.cursor = 'default'
    }
    otherTurn()
    cor(all)
    venceu()
  }
}

function xo(a) {
  letraXO = a

  if(stepOne === 1) {
    if(letraXO == 'X') {
      c('.xo').style.width = '80px'
      c('.xo').style.height = '80px'
      c('.xo').style.borderBottom = '5px solid white'
      c('.xo1').style.borderBottom = 'none'
      c('.xo1').style.width = '70px'
      c('.xo1').style.height = '70px'
    } else {
      c('.xo1').style.width = '80px'
      c('.xo1').style.height = '80px'
      c('.xo1').style.borderBottom = '5px solid white'
      c('.xo').style.borderBottom = 'none'
      c('.xo').style.width = '70px'
      c('.xo').style.height = '70px'
    }
  }
}

function otherTurn() {
  if(letraXO == 'X') {
    c('.xo1').style.width = '80px'
    c('.xo1').style.height = '80px'
    c('.xo1').style.borderBottom = '5px solid white'
    c('.xo').style.borderBottom = 'none'
    c('.xo').style.width = '70px'
    c('.xo').style.height = '70px'
    letraXO = 'O'
  } else {
    c('.xo').style.width = '80px'
    c('.xo').style.height = '80px'
    c('.xo').style.borderBottom = '5px solid white'
    c('.xo1').style.borderBottom = 'none'
    c('.xo1').style.width = '70px'
    c('.xo1').style.height = '70px'
    letraXO = 'X'
  }
}

function cor(key) {
    if(key.innerHTML == 'X') {
        key.style.color = 'blue'
    } else {
        key.style.color = 'orangered'
    }
}

function venceu() {
  for(let i in vencedor) {
    if (vencedor[i][0].innerHTML == 'X' && vencedor[i][1].innerHTML == 'X' && vencedor[i][2].innerHTML == 'X') {
      c('.venceu').innerHTML = 'X VENCEU!'
      winner = true
    }
  }
  
  for(let i in vencedor) {
    if (vencedor[i][0].innerHTML == 'O' && vencedor[i][1].innerHTML == 'O' && vencedor[i][2].innerHTML == 'O') {
      c('.venceu').innerHTML = 'O VENCEU!'
      winner = true
    }
  }

  if(cont === 0 && winner === false) {
    c('.venceu').innerHTML = 'DEU EMPATE!'
  }
}

function rec() {
  let all = document.querySelectorAll('.container div')
  let i = 9
  while(i > 0) {
    i--
    all[i].innerHTML = ''
    all[i].style.cursor = 'pointer'
  }

  letraXO = ''
  c('.xo1').style.width = '80px'
  c('.xo1').style.height = '80px'
  c('.xo1').style.borderBottom = 'none'
  c('.xo').style.borderBottom = 'none'
  c('.xo').style.width = '80px'
  c('.xo').style.height = '80px'

  c('.venceu').innerHTML = ''
  cont = 9
  winner = false
}