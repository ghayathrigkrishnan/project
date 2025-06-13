var express = require("express");
var app = express();

require("./db");

var students = require("./model/participant");

app.use(express.json());

var cors = require("cors")
app.use(cors());

var port = 3000;

app.get('/',(req,res)=>{
    res.send("hello");
});

app.post('/',async(req,res)=>{
    try {
        await students(req.body).save();
        res.send("Data added")
    } catch (error) {}
});

app.get('/view',async(req,res)=>{
    try {
        var data = await students.find();
        res.send(data); 
    } catch (error) {
        res.send(error)
    }
});

app.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    try {
        await students.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    } catch (error) {
        res.send(error);
    }
});

app.put("/:id", async(req,res)=>{
    try {
        await students.findByIdAndUpdate(req.params.id,req.body);
        res.send("student data updated")
    } catch (error) {
        res.send(error);
    }
});

app.listen(port,() =>{
    console.log(`Server is up and running in ${port}`);
});