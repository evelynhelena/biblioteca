/*view livro editora e categoria*/
create view  vw_livro_editora_categoria as
select * from tbl_livros tl join 
tbl_categoria tc on tl.fk_categoria = tc.codigo_categoria 
join tbl_editora te on tl.fk_editora = te.codigo_editora 
where tl.livro_deletado = 0;

/*view user*/
create view vw_user as
select tu.codigo_user , tu.email, tu.userName, tu.name , tu.user_deletado from tbl_user tu where tu.user_deletado = 0;