async function cadastrar() {
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