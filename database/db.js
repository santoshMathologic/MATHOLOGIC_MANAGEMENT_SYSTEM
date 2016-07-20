var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crewlink',function(error){
         if(error) console.log("Error in Database Connection",+error);
         else{
             console.log("Database Connected Succcessfully");

         }
})