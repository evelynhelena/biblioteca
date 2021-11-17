/*proceduce update cliente*/

DELIMITER $$
	create procedure pc_updateClient(nome VARCHAR(45),cpf VARCHAR(45),nasci DATE,email VARCHAR(45),codigo INT)
    begin
    update tbl_cliente  SET nome_cliente = nome ,cpf_cliente = cpf ,nasc_cliente = nasci,email = email WHERE codigo_cliente = codigo;
    END $$
DELIMITER ;
