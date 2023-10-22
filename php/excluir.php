<?php

$id = $_POST['id'];

$con = mysqli_connect("localhost", "root", "!sqlintABC12", "temperos");

$query1 = "delete from carrinho where id_prod = $id";
$query2 = "delete from produtos where id = $id";

mysqli_query($con, $query1);
mysqli_query($con, $query2);

echo json_encode("Produto excluído com sucesso!");

?>