// VALIDAÇÃO CHECK-IN
let entrada = document.querySelector("#entrada")
let validacao = document.querySelector("#validacao_entrada")

entrada.addEventListener("blur", ()=>{
    if (entrada.value == ""){
        if(validacao.classList.contains("d-none")){

            validacao.classList.remove("d-none")
            validacao.classList.add("d-block")
        }
    }else{
        validacao.classList.remove("d-block")
        validacao.classList.add("d-none")
    }
})

// VALIDAÇÃO CHECK-OUT
let saida = document.querySelector("#saida")
let validacao_saida = document.querySelector("#validacao_saida")

saida.addEventListener("blur", ()=>{
    if (saida.value == ""){
        if(validacao_saida.classList.contains("d-none")){

            validacao_saida.classList.remove("d-none")
            validacao_saida.classList.add("d-block")
        }
    }else{
        validacao_saida.classList.remove("d-block")
        validacao_saida.classList.add("d-none")
    }
})

// VALIDAÇÃO QUARTOS
let quartos = document.querySelector("#quartos")
let validacao_quartos = document.querySelector("#validacao_quartos")

quartos.addEventListener("blur", ()=>{
    if (quartos.value == ""){
        if(validacao_quartos.classList.contains("d-none")){

            validacao_quartos.classList.remove("d-none")
            validacao_quartos.classList.add("d-block")
        }
    }else{
        validacao_quartos.classList.remove("d-block")
        validacao_quartos.classList.add("d-none")
    }
})

// VALIDAÇÃO ADULTOS
let adultos = document.querySelector("#adultos")
let validacao_adultos = document.querySelector("#validacao_adultos")

adultos.addEventListener("blur", ()=>{
    if (adultos.value == ""){
        if(validacao_adultos.classList.contains("d-none")){

            validacao_adultos.classList.remove("d-none")
            validacao_adultos.classList.add("d-block")
        }
    }else{
        validacao_adultos.classList.remove("d-block")
        validacao_adultos.classList.add("d-none")
    }
})

// VALIDAÇÃO CRIANÇAS
let criancas = document.querySelector("#criancas")
let validacao_criancas = document.querySelector("#validacao_criancas")

criancas.addEventListener("blur", ()=>{
    if (criancas.value == ""){
        if(validacao_criancas.classList.contains("d-none")){

            validacao_criancas.classList.remove("d-none")
            validacao_criancas.classList.add("d-block")
        }
    }else{
        validacao_criancas.classList.remove("d-block")
        validacao_criancas.classList.add("d-none")
    }
})

// let entrada = document.querySelector("#entrada")
// let validacao = document.querySelector("#validacao")

// entrada.addEventListener("blur", ()=>{
//     if(entrada.value == "dd/mm/aaaa"){
//         validacao.classList.remove("d-none")
//         validacao.classList.add("d-block")
//     }
//     else{
//         validacao.classList.remove("d-block")
//         validacao.classList.add("d-none")
//     }
// })



// let crianca = document.querySelector("#crianca")
// let span_crianca = document.querySelector("#span_crianca")

// entrada.addEventListener("blur", ()=>{
//     if(crianca.value == ""){
//         span_crianca.classList.remove("d-none")
//         span_crianca.classList.add("d-block")
//     }
//     else{
//         span_crianca.classList.remove("d-block")
//         span_crianca.classList.add("d-none")
//     }
// })
