const c = (el)=>document.querySelector(el)
const a = (l) => {
    c('.num1').value = ''
    c('.num2').value = ''
    c('.res').innerHTML = ''
}

c('.adi').addEventListener('click', ()=>{
    a(c('.adi'))
    c('.x').innerHTML = '+'
    c('.calc').addEventListener('click', ()=>{
        let n1 = Number(c('.num1').value)
        let n2 = Number(c('.num2').value)
        c('.res').innerHTML = n1 + n2
    })
})

c('.sub').addEventListener('click', ()=>{
    a(c('.sub'))
    c('.x').innerHTML = '-'
    c('.calc').addEventListener('click', ()=>{
        let n1 = Number(c('.num1').value)
        let n2 = Number(c('.num2').value)
        c('.res').innerHTML = n1 - n2

    })
})

c('.multi').addEventListener('click', ()=>{
    a(c('.multi'))
    c('.x').innerHTML = 'x'
    c('.calc').addEventListener('click', ()=>{
        let n1 = Number(c('.num1').value)
        let n2 = Number(c('.num2').value)
        c('.res').innerHTML = n1 * n2
    })
})

c('.divi').addEventListener('click', ()=>{
    a(c('.divi'))
    c('.x').innerHTML = '/'
    c('.calc').addEventListener('click', ()=>{
        let n1 = Number(c('.num1').value)
        let n2 = Number(c('.num2').value)
        c('.res').innerHTML = n1 / n2
    })
})

function clicarleft(n) {
    c('.num1').value += n
}

function clicarright(n) {
    c('.num2').value += n
}
