create database pets;

use pets;

create table animais (

  registro int not null,

  nome varchar(100),

  especie int,

  nascimento int,

  primary key (registro)

);

