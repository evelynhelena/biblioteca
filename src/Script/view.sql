/*view livro editora e categoria*/
create view  vw_livro_editora_categoria as
select * from tbl_livros tl join 
tbl_categoria tc on tl.fk_categoria = tc.codigo_categoria 
join tbl_editora te on tl.fk_editora = te.codigo_editora
left join autor_livro al ON tl.codigo_livro = al.fk_livro
where tl.livro_deletado = 0;

/*view user*/
create view vw_user as
select tu.codigo_user , tu.email, tu.userName, tu.name , tu.user_deletado from tbl_user tu where tu.user_deletado = 0;

/*view livro emprstimo*/
create view  vw_livro_emprestimo as
select * from tbl_emprestimo te
join tbl_livro_emprestimo tle on te.codigo_emprestimo = tle.fk_emprestimo
join tbl_livros tl on tle.fk_livro = tl.codigo_livro
where te.emprestimo_deletado = 0;
