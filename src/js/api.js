let linha = document.querySelector("#linha")

// async = é uma forma que o js tem de transformar uma função sícrona em assíncrona, muito utilizada em APIs
async function carregarDados(){
    const url = "https://64d2a382f8d60b1743624173.mockapi.io/hotel"

    const resultado = await fetch(url)
    // await = esperar a resposta, so pode ser usada se a função for async
    // fetch = procura, busca
    const dados = await resultado.json()
    // Estamos convertendo todos os dados que estão vindo da api no formato json

    for (const item of dados) {
        // acessando as informações do vetor
        // *****CRIANDO ELEMENTOS EM HTML******
        const linha = document.createElement("tr")
        const tdReserva = document.createElement("td")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdNascimento = document.createElement("td")
        const tdTipoQuarto = document.createElement("td")
        const tdQuantPessoa = document.createElement("td")
        const tdCheckIn = document.createElement("td")
        const tdCheckOut = document.createElement("td")

        // Criando conteúdo nas colunas
        tdReserva.textContent = item.codigo_reserva
        tdNome.textContent = item.nome
        tdEmail.textContent = item.email
        tdNascimento.textContent = item.data_nascimento
        tdTipoQuarto.textContent = item.tipo_quarto
        tdQuantPessoa.textContent = item.quantidade_pessoas
        tdCheckIn.textContent = item.data_check_in
        tdCheckOut.textContent = item.data_check_out

        //ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdReserva)
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdNascimento)
        linha.appendChild(tdTipoQuarto)
        linha.appendChild(tdQuantPessoa)
        linha.appendChild(tdCheckIn)
        linha.appendChild(tdCheckOut)
        //appendChild = adicione filhos

        tabela.appendChild(linha)
    }
    
}

carregarDados()