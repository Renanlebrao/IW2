// (o stringify simula o que o servidor faz)
const jsonDados = JSON.stringify([
    { 'id': 1, 'nome': 'Notebook Gamer', 'preco': 450, 'status': 'Disponível em Estoque' },
    { 'id': 2, 'nome': 'Mouse Sem Fio', 'preco': 120, 'status': 'Esgotado' },
    { 'id': 3, 'nome': 'Teclado Mecânico', 'preco': 350, 'status': 'Disponível em Estoque' },
    { 'id': 4, 'nome': 'Headset Wireless', 'preco': 600, 'status': 'Disponível em Estoque' },
    { 'id': 5, 'nome': 'Mousepad Desk Mat', 'preco': 50, 'status': 'Esgotado' }
])

// ETAPA 2: O Cliente (Navegador) recebe um texto e "desempacota"
const dadosConvertidos = JSON.parse(jsonDados);

// ETAPA 3: O Javascript manipula os dados convertidos para criar
// a tabela
const corpoTabela = document.getElementById('tbodyCorpoTabela');
dadosConvertidos.forEach(produto => {
    const linha = document.createElement('tr');

    // Usando "Template Literals"
    linha.innerHTML = `<td>${produto.id}</td><td>${produto.nome}</td><td>$ ${produto.preco}</td><td>${produto.status}</td>`;

    corpoTabela.appendChild(linha);
})