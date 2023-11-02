<?php

$con = mysqli_connect("localhost", "root", "!sqlintABC12", "temperos");

$preco = $_POST["preco"];
$metodo = $_POST["metodo"];

$query1 = "insert into compras values (null, $preco, '$metodo')";
$query2 = "delete from carrinho where id_prod <> 1";

mysqli_query($con, $query1);
mysqli_query($con, $query2);

echo json_encode("Compra realizada com sucesso!");

?>