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