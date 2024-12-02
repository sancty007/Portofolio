



const mysql = require('mysql');


const connection = mysql.createConnection({
    host : process.env.DB_PORT,
    user :process.env.DB_USER,
    password : process.env.DB_PASS,
    port: process.env.DB_PORT
});


connection.connect((err :any )=>{
    if(err){
        console.log("Error connecting to the database", err);
    }
    else{
        console.log("Connected to the database successfully");
    }
    connection.end();
});