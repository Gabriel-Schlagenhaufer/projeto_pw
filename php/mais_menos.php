<?php

$cod = $_POST["cod"];
$opcao = $_POST["mais"];

$con = mysqli_connect("localhost", "root", "!sqlintABC12", "temperos");

if ($opcao === "mais") {
    $query = "update carrinho set qtd = qtd + 1 where id_prod = $cod";
} else {
    $query = "update carrinho set qtd = qtd - 1 where id_prod = $cod";
}

mysqli_query($con, $query);
$res = mysqli_query($con, "select qtd from carrinho where id_prod = $cod");

$valor = array();
while ($row = mysqli_fetch_array($res)) {
    array_push($valor, $row);
}

echo json_encode($valor);

?>