Create database bancoBiblioteca;

Use bancoBiblioteca;

Create table tbl_categoria(
  codigo_categoria int auto_increment primary key not null,
  nome_categoria varchar (45),
  categoria_deletada bool default false
);

Create table tbl_editora(
  codigo_editora int primary key auto_increment not null,
  nome_editora varchar (45),
  cnpj varchar (45),
  email varchar (100),
  editora_deletada bool default false
);

Create table tbl_livros(
   codigo_livro int auto_increment primary key not null,
   nome_livro varchar (45) not null,
   data_publicacao date  not null,
   paginas int  not null,
   valor_unitario DECIMAL (6, 2)  not null,
   fk_categoria int (11) not null,
   fk_editora int (11) not null,
   livro_deletado bool default false,
   foreign key (fk_categoria )  references tbl_categoria (codigo_categoria),
   foreign key (fk_editora)  references tbl_editora (codigo_editora)
);

Create table tbl_autor(
  codigo_autor int primary key auto_increment  not null,
  nome_autor varchar (45)  not null,
  nasc_autor DATE  not null,
  nacionalidade varchar (45)  not null,
  autor_deletado bool default false
);

Create table tbl_cliente(
   codigo_cliente int auto_increment primary key  not null,
   nome_cliente varchar (45)  not null,
   cpf_cliente varchar (45)  not null,
   nasc_cliente DATE  not null,
   email varchar (45)  not null,
   cliente_deletado bool default false
);

Create table autor_livro(
  fk_autor int (11) not null,
  fk_livro int (11) not null,
  foreign key( fk_autor ) references tbl_autor(codigo_autor),
  foreign key( fk_livro) references tbl_livros(codigo_livro)
 );

Create table tbl_emprestimo(
  codigo_emprestimo int auto_increment primary key not null,
  retirada datetime not null,
  devolucao TIMESTAMP not null,
  fk_cliente int (11) not null,
  livro_devolvido bool default false,
  foreign key( fk_cliente) references tbl_cliente (codigo_cliente)
);
  

Create table tbl_livro_emprestimo(
fk_livro int (11) not null,
fk_emprestimo int (11) not null,
foreign key( fk_livro) references tbl_livros(codigo_livro),
foreign key( fk_emprestimo) references tbl_emprestimo(codigo_emprestimo)
);

create table tbl_log(
	codigo_log int auto_increment primary key not null,
	date_change dateTime default now(),
	preco_antigo DECIMAL,
	preco_atual DECIMAL,
	fk_codigo_livro int,
	foreign key (fk_codigo_livro )  references tbl_livros (codigo_livro)
);

create table tbl_user(
	codigo_user int auto_increment primary key not null,
	name varchar(45),
	userName varchar(45),
	email varchar(100),
	password varchar(64),
	user_deletado bool default false
);

/*Alter Tables*/
alter table tbl_emprestimo add column emprestimo_deletado bool default false;


