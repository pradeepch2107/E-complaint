const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const mongodb=require("mongodb").MongoClient;
const app=express();
var db;
const { v4: uuidv4 } = require('uuid');
const { stringify } = require("querystring");


mongodb.connect("mongodb+srv://pradeep_ch:PradeepCh@cluster0.fqwcd.mongodb.net/E-complaint?retryWrites=true&w=majority",(error,result)=>{
    if(error){
        console.log(error);
        console.log("db not connected");
    }
    else{
        console.log("db connected");
        db=result.db("E-complaint");
    }

});

app.use(cors());

app.use(bodyparser.json());
app.post("/register",(req,res)=>{
    req.body._id=uuidv4();
    console.log(req.body);
    db.collection("users").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in insert query"); 
        }
        else{
         res.json("user registered successfully");
        }
    });
});

app.post("/login",(req,res)=>{
    
    db.collection("users").find(req.body,{Projection:{_id :1,uname :1}}).toArray((error,data)=>{
        
        if(error){
            res.status(403).json("error in finding document"); 
        }
        else{
         res.json(data);
        }
    });
});



app.get("/allusers",(req,res)=>{
    db.collection("users").find(null,{Projection:{upassword:0}}).toArray((error,data)=>{
        
        if(error){
            res.status(403).json("error in finding document"); 
        }
        else{
        
         res.json(data);
        }


    });

});

app.get("/usernamecheck/:username",(req,res)=>{
    db.collection("users").find({uname:req.params.username},{Projection:{_id:1}}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding username Availability"); 
        }
        else{
         res.json(data);
        }
    });

});

app.post("/transcomplaint",(req,res)=>{
    req.body._id=new Date().getTime();
    db.collection("complaints").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in insert query"); 
        }
        else{
         res.json("complaint registered successfully");
        }

    });

});



app.get("/reccomplaint",(req,res)=>{
    db.collection("complaints").find().toArray((error,data)=>{
        if(error){
            res.status(403).json("error in insert query"); 
        }
        else{
         res.json(data);
        }

    });

});

app.get("/getcomplaint/:userid",(req,res)=>{
    db.collection("complaints").find({_id : Number(req.params.userid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding complaint"); 
        }
        else{
         res.json(data);
        }
    });
});

app.post("/sendcontact",(req,res)=>{
    req.body._id=new Date().getTime();
    db.collection("contactus").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in insert query"); 
        }
        else{
         res.json("sent successfully");
        }
    });

});

app.get("/getallcontacts",(req,res)=>{
    db.collection("contactus").find().toArray((error,data)=>{
        
        if(error){
            res.status(403).json("error in finding contacts"); 
        }
        else{
        
         res.json(data);
        }


    });

});

app.get("/opencontact/:userid",(req,res)=>{
    db.collection("contactus").find({_id : Number(req.params.userid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding contact"); 
        }
        else{
         res.json(data);
        }
    });
});

app.delete("/deletecomplaint/:userid",(req,res)=>{
    db.collection("complaints").deleteOne({_id:Number(req.params.userid)},(error,data)=>{
        if(error){
            res.status(403).json("error in finding complaint"); 
        }
        else{
         res.json("complaint deleted successfully");
        }

    });

});

app.delete("/deletecontact/:userid",(req,res)=>{
    db.collection("contactus").deleteOne({_id:Number(req.params.userid)},(error,data)=>{
        if(error){
            res.status(403).json("error in finding contact"); 
        }
        else{
         res.json("contact deleted successfully");
        }

    });

});

app.get("/search/:searchtxt?",(req,res)=>{
    if(req.params.searchtxt!=undefined){
        var search=new RegExp(req.params.searchtxt,'i'); 
        var searchCond={uname:search};
    }
    else{
        var searchCond=null;
    }
   
    db.collection("complaints").find(searchCond).toArray((error,data)=>{
        res.json(data);

    });

});

app.get("/searchuser/:searchtxt?",(req,res)=>{
    if(req.params.searchtxt!=undefined){
        var search=new RegExp(req.params.searchtxt,'i'); 
        var searchCond={uname:search};
    }
    else{
        var searchCond=null;
    }
   
    db.collection("users").find(searchCond).toArray((error,data)=>{
        res.json(data);

    });

});

app.get("/mycomplaints/:userid",(req,res)=>{
    db.collection("complaints").find({requestedby : String(req.params.userid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding contact"); 
        }
        else{
         res.json(data);
        }
    });
});

app.get("/openmycomplaint/:userid",(req,res)=>{
    db.collection("complaints").find({_id : Number(req.params.userid)}).toArray((error,data)=>{
        if(error){
            res.status(403).json("error in finding contact"); 
        }
        else{
         res.json(data);
        }
    });
});
app.post("/savestatus",(req,res)=>{
    req.body._id=new Date().getTime();
    db.collection("status").save(req.body,(error,data)=>{
        if(error){
            res.status(403).json("error in insert query"); 
        }
        else{
         res.json("success");
        }

    });

});
app.get("/receivestatus/:userid",(req,res)=>{
    db.collection("status").find({statusid : String(req.params.userid)}).toArray((error,data)=>{
        console.log(data);
        if(error){
            res.status(403).json("error in finding contact"); 
        }
        else{
         res.json(data);
        }
    });

});







module.exports=app;