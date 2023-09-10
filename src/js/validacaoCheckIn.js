// VALIDAÇÃO CHECK-IN
let nome = document.querySelector("#nome")

nome.addEventListener("blur", ()=>{
    if (nome.value == ""){
        nome.classList.add("border-danger","border-2")
    }else{
        nome.classList.remove("border-danger","border-2")
        
    }
})


let telefone = document.querySelector("#telefone")


telefone.addEventListener('keyup', function(event){
  if (event.keyCode != 32 && event.keyCode != 46){
    let i = telefone.value.length
    aux = telefone.value

    if(i == 0)
    telefone.value = "(" + aux
  
    if(i == 2)
    telefone.value = aux + ")"
  
    if(i == 8)
    telefone.value = aux + "-"
  }
})

let limiteTelefone = document.querySelector("#telefone")
let limite = 13

limiteTelefone.addEventListener("keyup", ()=>{

    limiteTelefone.setAttribute("maxlength", limite)

})

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

