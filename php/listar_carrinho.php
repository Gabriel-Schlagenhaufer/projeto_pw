<?php

$arqsenha = fopen("senha.txt","r");
$senha = fgets($arqsenha);
fclose($arqsenha);

$con = mysqli_connect("localhost", "root", $senha, "temperos");
$query = "select c.id_prod, p.nome, p.preco, c.qtd from carrinho c join produtos p on c.id_prod = p.id";

$resultado = mysqli_query($con, $query);

$produtos = array();

while ($row = mysqli_fetch_assoc($resultado)) {
    array_push($produtos, $row);
}

echo json_encode($produtos);

?>