//var resp = document.getElementById('res');
//res.innerHTML = Math.floor(100* Math.random() + 1);

const form = document.getElementById("form-deposito")
const res = document.getElementById("res")

form.addEventListener('submit', function(e){
    e.preventDefault();

    const tprimerioNumero = document.querySelector("#primeiro-numero")
    const primerioNumero = Number(tprimerioNumero.value)
    const tsegundoNumero = document.querySelector("#segundo-numero")
    const segundoNumero = Number(tsegundoNumero.value)

    const soma = primerioNumero + segundoNumero
    const aleatorio = Math.floor(100* Math.random() + 1)
    console.log(aleatorio)

    const mensagemSucesso = `A soma do seu numero foi: <b>${soma}</b> e o numero gerado foi: <b>${aleatorio}</b> .Seu numero ganhou.`
    const mensagemPerdeu = `A soma do seu numero foi: <b>${soma}</b> e o numero gerado foi: <b>${aleatorio}</b> .Seu numero perdeu.`

    if (soma > aleatorio){
        const containerCalculando = document.querySelector(".calculando")
        containerCalculando.style.display = "none"
        const containerMensagemVitoria = document.querySelector(".mensagem-vitoria")
        containerMensagemVitoria.style.display = "block"
        const mensage = document.getElementById("mensagem")
        mensage.innerHTML = mensagemSucesso
        
    }else{
        const containerCalculando = document.querySelector(".calculando")
        containerCalculando.style.display = "none"
        const containerMensagemDerrota = document.querySelector(".mensagem-derrota")
        containerMensagemDerrota.style.display = "block"
        const mensage = document.getElementById("mensagem-perdeu")
        mensage.innerHTML = mensagemPerdeu
    }
})



