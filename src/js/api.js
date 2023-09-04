async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://64d2a382f8d60b1743624173.mockapi.io/hotel');
        const data = await response.json();


        const codReservaElement = document.querySelector('#cod-reserva');
        if (codReservaElement) {
            codReservaElement.textContent = data[0].codigo_reserva;
        }

        const nomeElement = document.querySelector('#nome');
        if (nomeElement) {
            nomeElement.textContent = data[0].nome; 
        }

        const emailElement = document.querySelector('#email');
        if (emailElement) {
            emailElement.textContent = data[0].email; 
        }

        const telefoneElement = document.querySelector('#tel');
        if (telefoneElement) {
            telefoneElement.textContent = data[0].telefone; 
        }
        
        const enderecoElement = document.querySelector('#endereco');
        if (enderecoElement) {
            enderecoElement.textContent = data[0].endereco; 
        }

        const nascElement = document.querySelector('#nasc');
        if (nascElement) {
            nascElement.textContent = data[0].data_nascimento; 
        }

        
        const quartoElement = document.querySelector('#tipo_quarto');
        if (quartoElement) {
            quartoElement.textContent = data[0].tipo_quarto; 
        }
        
        
        const pessoasElement = document.querySelector('#pessoas');
        if (pessoasElement) {
            pessoasElement.textContent = data[0].quantidade_pessoas; 
        }
        
        
        const inElement = document.querySelector('#in');
        if (inElement) {
            inElement.textContent = data[0].data_check_in; 
        }
        
        const outElement = document.querySelector('#out');
        if (outElement) {
            outElement.textContent = data[0].data_check_out; 
        }
        
        
        const pagamentoElement = document.querySelector('#pagamento');
        if (pagamentoElement) {
            pagamentoElement.textContent = data[0].tipo_pagamento; 
        }
        
        
        const diariaElement = document.querySelector('#diaria');
        if (diariaElement) {
            diariaElement.textContent = data[0].valor_diaria; 
        }
        


    } catch (error) {
        console.error('Erro ao buscar e exibir dados da API:', error);
    }
}

window.onload = fetchAndDisplayData;
