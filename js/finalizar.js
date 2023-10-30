window.onload = async function () {
  const res = await fetch("../php/listar_carrinho.php", {
    method: "GET"
  });
  const produtos = await res.json();

  const template = document.getElementById("template-itens");
  const divItens = document.getElementById("itens");

  let preco_total = 0.0;

  produtos.forEach(produto => {
    item = template.content.cloneNode(true);
    
    item.querySelector("[nome").innerHTML = produto.nome;
    item.querySelector("[preco").innerHTML = produto.preco;
    item.querySelector("[qtd").innerHTML = produto.qtd;

    divItens.appendChild(item);

    preco_total += produto.preco * produto.qtd;
  });

  document.getElementById("total-preco-span").innerHTML = "Preço Total: R$" + preco_total.toFixed(2);
}

async function finalizar() {
  let from = new FormData();
  
}