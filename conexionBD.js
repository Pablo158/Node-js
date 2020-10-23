var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb+srv://PabloCC:Pablo*1599@cluster0.empxh.mongodb.net/clase?retryWrites=true&w=mayoría');
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongo cloud");
})
module.exports=connection;