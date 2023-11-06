<?php

$nome = $_POST["nome"];
$preco = $_POST["preco"];
$arquivo = $_FILES["arquivo"];

if ($arquivo["type"] != "image/png") {
    echo json_encode("Formato de arquivo Inválido");
    exit;
}
  
$arqsenha = fopen("senha.txt","r");
$senha = fgets($arqsenha);
fclose($arqsenha);

$con = mysqli_connect("localhost", "root", $senha, "temperos");
$query = "insert into produtos values (null, '$nome', $preco)";

if ($con->query($query) === TRUE) {
    $last_id = $con->insert_id;
} else {
    echo json_encode("Erro: ".$query."<br>".$con->error);
    exit;
}

if (!file_exists("../img_temperos")) {
    mkdir("../img_temperos");
}

$caminho = "../img_temperos/".$last_id.".png";
move_uploaded_file($arquivo["tmp_name"], $caminho);

echo json_encode("Produto cadastrado com sucesso!");

?>