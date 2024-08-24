// function livro(nome, ano, autor) {
//     const nomeMaisculo = nome.toUpperCase()
//     const anoDesdeLancamento = 2024-ano
//     const frase = `${nome} por ${autor}`;
//     return {
//         nomeMaisculo,
//         anoDesdeLancamento,
//         frase
//     }
// }
// const senhorDosAneis = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien')
// const harryPotter = livro('Harry Potter', 1997, 'J. K. Rowling')
// console.log(senhorDosAneis, harryPotter)


// const circulo = document.querySelector(".circulo")

// function moverMouse(event) {
//     const larguraCirculo = circulo.offsetWidth
//     const alturaCirculo = circulo.offsetHeight 
//     const valorTop = event.clientY - (alturaCirculo/2)
//     const valorLeft = event.clientX - (larguraCirculo/2)
//     circulo.style.top = `${valorTop}px`
//     circulo.style.left = `${valorLeft}px`
// }

// window.addEventListener('mousemove', moverMouse)

const botao = document.querySelector(".botao")
const valor = document.querySelector("div")
if (botao){
    function somar(event) {
        if (Number(valor.innerHTML) < 10) {
        valor.innerHTML = Number(valor.innerHTML) + 1;
        } else {
            console.error("NÃO É POSSÍVEL ADICIONAR MAIS!! VOCÊ JÁ CLICOU 10 VEZES")
        }
    }
    botao.addEventListener('click', somar)   
} 