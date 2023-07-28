// const mysql=require('mysql2')

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-completee',
//     password:''

// })

// module.exports=pool.promise();

const Sequelize = require('sequelize')

const sequelize= new Sequelize('node-completee','root','',{
    dialect:'mysql', host:'localhost'
});

module.exports=sequelize;