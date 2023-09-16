// VALIDAÇÃO CHECK-IN
let nome = document.querySelector("#nome")

nome.addEventListener("blur", ()=>{
    if (nome.value == ""){
        nome.classList.add("border-danger","border-2")
    }else{
        nome.classList.remove("border-danger","border-2")
        
    }
})


let telefoneInput = document.getElementById("telefone");


telefoneInput.addEventListener("keyup", function () {
    
    let numerosApenas = telefoneInput.value.replace(/\D/g, "")

    /l
    if (numerosApenas.length >= 2){

        let ddd = numerosApenas.slice(0, 2)
        let parte1 = numerosApenas.slice(2, 7)
        let parte2 = numerosApenas.slice(7, 11)

    
        if (numerosApenas.length > 11){

            parte1 = numerosApenas.slice(2, 8)
            parte2 = numerosApenas.slice(8, 12)
        }

        let numeroFormatado = ( "(" + ddd + ")" + " " + parte1 + "-" + parte2)

        
        telefoneInput.value = numeroFormatado
    }
})


// let limiteTelefone = document.querySelector("#telefone")
// let limite = 15

// limiteTelefone.addEventListener("keyup", ()=>{

//     limiteTelefone.setAttribute("maxlength", limite)

// })


let email = document.querySelector("#email")

email.addEventListener("keyup", function(){
    
let minusculo = email.value.toLowerCase()

    email.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        console.log("Email inválido")
        email.classList.add("border-danger","border-2")
    }
    else{
        console.log("Email válido")
        email.classList.remove("border-danger", "border-2")
         
    }
    console.log(email.value.indexOf("@"))
})





document.getElementById('submit').addEventListener('click', ()=>{
    // Verifique se os campos estão vazios
    const numeroCartao = document.getElementById('numeroCartao').value
    const validade = document.getElementById('validade').value
    const codigoSeguranca = document.getElementById('codigoSeguranca').value

    if ( numeroCartao === '' || validade === '' || codigoSeguranca === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário
    }
})

