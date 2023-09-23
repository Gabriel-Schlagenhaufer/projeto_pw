const templateItens = document.getElementById("template-item");
// let conteudo = document.importNode(templateItens.content, true);

for (let i = 0; i < 5; i++) {
    let conteudo = document.importNode(templateItens.content, true);
    document.getElementById("itens").appendChild(conteudo);
}

function adicionar() {
    let conteudo = document.importNode(templateItens.content, true);
    document.getElementById("itens").appendChild(conteudo);
}
