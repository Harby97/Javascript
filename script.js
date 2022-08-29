const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn')
const presult = document.querySelector('#presult')
const form = document.querySelector('#form')



// btn.addEventListener('click', sumar);
form.addEventListener('submit',sumar);

function sumar(event) {
    console.log({event});
    event.preventDefault();
    const resultado = Number(input1.value) + Number(input2.value);
    presult.innerText =  resultado;
}