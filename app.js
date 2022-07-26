const express= require("express")
const bodyParser= require("body-parser")

const app = express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Play","Drink", "Eat"];
var workItem=[];
app.get("/", function(req,res){
    var today= new Date();
   // var currentDay= today.getDay();
    var day="";
    var options={
        weekday:'long',
        day:"numeric",
        month:"long"
    };
    day= today.toLocaleDateString("en-US", options);
   
    res.render("list", {listTitle:day, items:items});
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", items:workItem});
})
app.get("/about", function(req,res){
    res.render("about");
})
app.post("/", function(req,res){
    var result= req.body.item;
    if(req.body.list === "Work"){
        workItem.push(result);
        res.redirect("/work");
    }else{
        items.push(result);
        res.redirect("/");
    }
    
    //console.log(result);
})

app.listen(3000, function(){
    console.log("Server is running at port 3000");
})