const Sequelize = require('sequelize');

//Config 
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine','handlebars');
//Conexão com o banco de dados MySql
    const sequelize = new Sequelize('test', 'root', '6558',{
        host: "localhost",
        dialect: "mysql"
    });

    app.listen(8081, function(){
        console.log("Servidor rodando na url http://localhost:8081")
    });