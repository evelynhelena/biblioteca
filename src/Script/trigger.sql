DELIMITER $
 create trigger tr_log_livro_update after update on tbl_livros
	FOR EACH ROW 
		BEGIN
		   IF (NEW.valor_unitario <> old.valor_unitario) THEN
           		insert into tbl_log (codigo_log,date_change,preco_antigo,preco_atual,fk_codigo_livro) 
		   		values(null, now(), old.valor_unitario, new.valor_unitario,new.codigo_livro);
      	   END IF;
        END$