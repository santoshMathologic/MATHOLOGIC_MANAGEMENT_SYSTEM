var mongooes = require('mongooes');
mongooes.connect('mongodb://127.0.0.1/mitManagement',function(error){
         if(error) console.log("Error in Database Connection",+error);
         else{
             console.log("Database Connected Succcessfully");

         }
})