import mysql from 'mysql2/promise';

async function connect(){
    
    const datainfo = {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password :process.env.MYSQL_PASSWORD,
        database :process.env.MYSQL_DATABASE
    };

    const connction = await mysql.createConnection(datainfo);

    return connction;
}

export default {connect};