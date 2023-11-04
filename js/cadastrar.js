async function cadastrar() {
  if (document.getElementById("nome").value === "") return alert("Preencha o campo nome!");
  if (document.getElementById("preco").value === "") return alert("Preencha o campo preço!");
  // if (document.getElementById("arquivo").files[0] == null) return alert("Escolha um arquivo!");

  if (isNaN(document.getElementById("preco").value)) return alert("Preço não é um número!");

  const form = document.getElementById("form-cadastrar");
  const file = document.getElementById("arquivo").files[0];
  let data = new FormData(form);
  data.append("arquivo", file)

  const res = await fetch("../php/cadastrar.php", {
    method: "POST",
    body: data
  });

  const resposta = await res.json();

  alert(resposta);
}