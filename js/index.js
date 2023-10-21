const templateItens = document.getElementById("template-item");
// let conteudo = document.importNode(templateItens.content, true);

window.onload = async function () {
  const res = await fetch("../php/itens.php", {
    method: "GET"
  });
  const produtos = await res.json();
  console.log(produtos);
}

function buscar(event) {
  const valor = event.target.value;
  console.log(valor);
}