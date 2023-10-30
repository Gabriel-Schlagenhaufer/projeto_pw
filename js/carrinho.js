var itens = [];

window.onload = async function () {
  const res = await fetch("../php/listar_carrinho.php", {
    method: "GET"
  });
  const produtos = await res.json();

  const template = document.querySelector("#template-produto");
  const itensCarrinho = document.getElementById("itens-carrinho");

  itens = produtos.map(produto => {
    let item = template.content.cloneNode(true).children[0];

    item.querySelector("[template-nome").innerText = produto.nome;
    item.querySelector("[template-preco").innerText = "R$" + produto.preco;
    item.querySelector("[template-qtd").innerText = produto.qtd;
    itensCarrinho.appendChild(item);
    
    return {
      cod: produto.id_prod,
      nome: produto.nome,
      preco: produto.preco,
      qtd: produto.qtd};
  });

  precoTotal();
}

async function maismenos(event, mais) {
  const nome = event.target.parentNode.parentNode.querySelector("[template-nome");
  const cod = itens.filter(item => item.nome == nome.innerText)[0].cod;
  
  let data = new FormData();
  data.append("cod", cod);
  data.append("mais", mais);

  const res = await fetch("../php/mais_menos.php", {
    method: "POST",
    body: data
  });

  const valor = await res.json();
  event.target.parentNode.querySelector("[template-qtd").innerText = valor[0].qtd;

  itens.forEach(item => {
    if (item.cod === cod) {
      item.qtd = valor[0].qtd;
    }
  });

  precoTotal();
}

function precoTotal() {
  let preco_total = 0;

  itens.forEach(elemento => {
    preco_total += elemento.preco * elemento.qtd;
  });

  document.getElementById("preco-total").innerText = "Preço Total: R$" + preco_total.toFixed(2);
}