cards = [];

window.onload = async function () {
  const res = await fetch("php/itens.php", {
    method: "GET"
  });
  const produtos = await res.json();
  
  const templateItens = document.getElementById("template-item");
  let itens = document.getElementById("itens");

  cards = produtos.map(produto => {
    let templateItem = templateItens.content.cloneNode(true).children[0];

    templateItem.querySelector("[data-template-item-nome").innerText = produto.nome;
    templateItem.querySelector("[data-template-item-preco").innerText = "R$" + produto.preco;
    templateItem.querySelector("[data-template-item-img").src = "img_temperos/" + produto.id + ".png";
    itens.appendChild(templateItem);

    return {nome: produto.nome, id: produto.id, card: templateItem};
  });
}

async function buscar(event) {
  const valor = event.target.value.toLowerCase();
  cards.forEach(card => {
    const visivel = card.nome.toLowerCase().includes(valor);
    card.card.classList.toggle("invisivel", !visivel);
  });
}

async function adicionar(event) {
  const nome = event.target.parentNode.parentNode.querySelector("[data-template-item-nome");
  const id = cards.filter(card => card.nome === nome.innerText)[0].id;
  const input = new FormData();
  input.append("id", id);
  const res = await fetch("php/adc_carrinho.php",  {
    method: "POST",
    body: input
  })

  const data = await res.json();
  console.log(data);
  alert(data);
}