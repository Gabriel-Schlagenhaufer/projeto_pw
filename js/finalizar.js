let form_preco_total = 0.0;

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
  form_preco_total = preco_total.toFixed(2);
}

async function finalizar() {
  if (form_preco_total == 0) {
    alert("Nenhum item no carrinho.");
    return;
  }

  let form = new FormData();
  let opcao = document.getElementById("opcao-pagamento").value;

  form.append("preco", form_preco_total);
  form.append("metodo", opcao);

  let promise = await fetch("../php/finalizar.php", {
    method: "POST",
    body: form
  });

  let res = await promise.json();

  console.log(res);
  alert(res);
  window.location.href = "../";
}