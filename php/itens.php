<?php

$con = mysqli_connect("localhost", "root", "!sqlintABC12", "temperos");
$query = "SELECT * FROM PRODUTOS";

$resultado = mysqli_query($con, $query);

$produtos = array();

while ($row = mysqli_fetch_assoc($resultado)) {
    array_push($produtos, $row);
}

echo json_encode($produtos);

?>