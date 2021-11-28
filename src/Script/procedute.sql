/*proceduce insert cliente*/
DELIMITER $$
	create procedure pc_insertClient(nome VARCHAR(45),cpf VARCHAR(45),nasci DATE,email VARCHAR(45))
    begin
    INSERT INTO tbl_cliente (nome_cliente, cpf_cliente, nasc_cliente, email) VALUES(nome,cpf, nasci, email);
    END $$
DELIMITER ;

/*proceduce update cliente*/
DELIMITER $$
	create procedure pc_updateClient(nome VARCHAR(45),cpf VARCHAR(45),nasci DATE,email VARCHAR(45),codigo INT)
    begin
    update tbl_cliente  SET nome_cliente = nome ,cpf_cliente = cpf ,nasc_cliente = nasci,email = email WHERE codigo_cliente = codigo;
    END $$
DELIMITER ;


/*insert categoria*/
DELIMITER $$
	create procedure pc_insrtCategoria(nome_categoria VARCHAR(45))
    begin
    insert into tbl_categoria(nome_categoria) values (nome_categoria);
    END $$
DELIMITER ;

/*update categoria*/
DELIMITER $$
	create procedure pc_updateCategoria(nome_categoria VARCHAR(45),codigo int)
    begin
    update tbl_categoria set nome_categoria = nome_categoria where codigo_categoria = codigo;
    END $$
DELIMITER ;


/*inert editora*/
DELIMITER $$
	create procedure pc_insertEditora(nome_editora VARCHAR(45),cnpj VARCHAR(45),email varchar (100))
    begin
    insert into tbl_editora(nome_editora,cnpj,email) values(nome_editora,cnpj,email);
    END $$
DELIMITER ;

/*update editora*/
DELIMITER $$
	create procedure pc_updateEditora(nome_editora VARCHAR(45),cnpj VARCHAR(45),email varchar (100),codigo int)
    begin
    update tbl_editora set nome_editora = nome_editora, cnpj = cnpj, email = email where codigo_editora = codigo;
    END $$
DELIMITER ;

/*insert author*/
DELIMITER $$
	create procedure pc_insertAutor(nome_autor VARCHAR(45),nasc_autor DATE,nacionalidade varchar (100))
    begin
    insert into tbl_autor (nome_autor,nasc_autor,nacionalidade) values (nome_autor,nasc_autor,nacionalidade);
    END $$
DELIMITER ;

/*update author*/
DELIMITER $$
	create procedure pc_updateAutor(nome_autor VARCHAR(45),nasc_autor DATE,nacionalidade varchar (100), codigo int)
    begin
    update tbl_autor set nome_autor = nome_autor, nasc_autor = nasc_autor, nacionalidade = nacionalidade where codigo_autor = codigo;
    END $$
DELIMITER ;

/*insert livro*/
DELIMITER $$
	create procedure pc_insertLivro(
	nome_livro VARCHAR(45),
	data_publicacao DATE,
	paginas int, 
	valor_unitario DECIMAL (6, 2),
	fk_categoria int,
	fk_editora int
	)
    begin
    insert into tbl_livros (nome_livro, data_publicacao, paginas,valor_unitario,fk_categoria,fk_editora)
    values (nome_livro, data_publicacao, paginas,valor_unitario,fk_categoria,fk_editora);
    END $$
DELIMITER ;

/*update livro*/
DELIMITER $$
	create procedure pc_UpdateLivro(
	nome_livro VARCHAR(45),
	data_publicacao DATE,
	paginas int, 
	valor_unitario DECIMAL (6, 2),
	fk_categoria int,
	fk_editora int,
	codigo int
	)
    begin
    update tbl_livros set nome_livro = nome_livro, data_publicacao = data_publicacao, paginas = paginas,
    valor_unitario = valor_unitario, fk_categoria = fk_categoria, fk_editora = fk_editora where codigo_livro = codigo;
    END $$
DELIMITER ;


/*insert user*/
DELIMITER $$
	create procedure pc_insertUser(userName VARCHAR(45),name varchar(45),email VARCHAR(100),password varchar(64))
    begin
    insert into tbl_user (userName,name,email,password) value (userName,name,email,SHA2(password,256));
    END $$
DELIMITER ;

/*update user*/
DELIMITER $$
	create procedure pc_updateUser(userName VARCHAR(45),email VARCHAR(100),password varchar(64),codigo int)
    begin
    update tbl_user set userName  = userName, email = email, password = SHA2(password,256) where codigo_user = codigo ;
    END $$
DELIMITER ;

/*selet usuario autenticado*/
DELIMITER $$
	create procedure pc_selectUser(userName VARCHAR(45),password varchar(64))
    begin
    select tu.codigo_user, tu.email , tu.user_deletado, tu.name, tu.userName 
    from  tbl_user tu 
    where tu.userName = userName and tu.password = SHA2(password,256);
    END $$
DELIMITER ;

/*insert autor_livro*/
DELIMITER $$
	create procedure pc_insertAutorLivro(fk_autor int ,fk_livro int)
    begin
    insert into autor_livro (fk_autor,fk_livro) values (fk_autor,fk_livro);
    END $$
DELIMITER ;

/*update autor_livro*/
DELIMITER $$
	create procedure pc_updateAutorLivro(fk_autor int ,fk_livro int,codigo int)
    begin
   	update autor_livro set fk_autor = fk_autor, fk_livro = fk_livro where codigo_autor_livro = codigo;
    END $$
DELIMITER ;
