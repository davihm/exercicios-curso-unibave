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


const circulo = document.querySelector(".circulo")

function moverMouse(event) {
    const larguraCirculo = circulo.offsetWidth
    const alturaCirculo = circulo.offsetHeight 
    const valorTop = event.clientY - (alturaCirculo/2)
    const valorLeft = event.clientX - (larguraCirculo/2)
    circulo.style.top = `${valorTop}px`
    circulo.style.left = `${valorLeft}px`
}

window.addEventListener('mousemove', moverMouse)