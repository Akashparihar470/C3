const app = require("./index");
const connect = require("./configs/db")

app.listen(8055, function (){
    try{
       await connect();
        console.log("listing port 8000");
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})