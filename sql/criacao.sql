create schema temperos;

use temperos;

create table produtos(
	id int auto_increment primary key unique,
    nome varchar(100) not null unique,
    preco decimal(6,2) not null
    );

create table carrinho(
	id_prod int primary key,
    qtd int not null default 1,
    foreign key(id_prod) references produtos(id)
    );

create table compras(
    id int primary key auto_increment,
    preco float not null,
    metodo varchar(20) not null
);