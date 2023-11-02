window.onload = carregar;

async function carregar() {
  const template = document.getElementById("template-item");
  let itens = document.getElementById("itens");
  itens.innerHTML = "";
  
  const res = await fetch("../php/itens.php", {
    method: "GET"
  });
  const dados = await res.json();

  dados.forEach(produto => {
    let item = template.content.cloneNode(true).children[0];
    
    item.querySelector("[item-id").innerText = produto.id;
    item.querySelector("[item-nome").innerText = produto.nome;
    item.querySelector("[item-preco").innerText = "R$" + produto.preco;
    itens.appendChild(item);
  });
}

async function excluir(event) {
  const id = event.target.parentNode.parentNode.querySelector("[item-id").innerText;
  let dados = new FormData();
  dados.append("id", id);

  const promise = await fetch("../php/excluir.php", {
    method: "POST",
    body: dados
  });
  
  const res = await promise.json();

  console.log(res);

  carregar();
}