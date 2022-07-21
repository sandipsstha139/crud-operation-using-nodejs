const mysql = require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'LearnCurd'
});

con.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 
module.exports=con;