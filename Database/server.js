const express= require('express');
var mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

var db=mysql.createConnection({
    host:"localhost",
    user:"root", 
    password:'',
    database:'countassets'
})

app.get('/counta',(req,res)=>{
    const sql="SELECT * FROM counta";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/trees',(req,res)=>{
    const sql="SELECT COUNT(trees) FROM counta where trees=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/solarpanel',(req,res)=>{
    const sql="SELECT COUNT(solarpanel) FROM counta where solarpanel=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/windturbine',(req,res)=>{
    const sql="SELECT COUNT(windturbine) FROM counta where windturbine=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/rainwaterharvestingsystem',(req,res)=>{
    const sql="SELECT COUNT(rainwaterharvestingsystem) FROM counta where rainwaterharvestingsystem=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/heatpump',(req,res)=>{
    const sql="SELECT COUNT(heatpump) FROM counta where heatpump=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/patio',(req,res)=>{
    const sql="SELECT COUNT(patio) FROM counta where patio=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/herbgarden',(req,res)=>{
    const sql="SELECT COUNT(herbgarden) FROM counta where herbgarden=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/gazebo',(req,res)=>{
    const sql="SELECT COUNT(gazebo) FROM counta where gazebo=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/gardensculpture',(req,res)=>{
    const sql="SELECT COUNT(gardensculpture) FROM counta where gardensculpture=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/flowerbed',(req,res)=>{
    const sql="SELECT COUNT(flowerbed) FROM counta where flowerbed=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/compostingbin',(req,res)=>{
    const sql="SELECT COUNT(compostingbin) FROM counta where compostingbin=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/bush',(req,res)=>{
    const sql="SELECT COUNT(bush) FROM counta where bush=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/bluerecyclingbin',(req,res)=>{
    const sql="SELECT COUNT(bluerecyclingbin) FROM counta where bluerecyclingbin=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/counta/vegetablegarden',(req,res)=>{
    const sql="SELECT COUNT(vegeetablegarden) FROM counta where vegetablegarden=1";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/counta/inserttree',(req,res)=>{
    const sql="INSERT INTO counta(`trees`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertsolarpanel',(req,res)=>{
    const sql="INSERT INTO counta(`solarpanel`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertwindturbine',(req,res)=>{
    const sql="INSERT INTO counta(`windturbine`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertrainwaterharvestingsystem',(req,res)=>{
    const sql="INSERT INTO counta(`rainwaterharvestingsystem`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertheatpump',(req,res)=>{
    const sql="INSERT INTO counta(`heatpump`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertpatio',(req,res)=>{
    const sql="INSERT INTO counta(`patio`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertherbgarden',(req,res)=>{
    const sql="INSERT INTO counta(`herbgarden`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertgazebo',(req,res)=>{
    const sql="INSERT INTO counta(`gazebo`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertgardensculpture',(req,res)=>{
    const sql="INSERT INTO counta(`gardensculpture`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertflowerbed',(req,res)=>{
    const sql="INSERT INTO counta(`flowerbed`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertcompostingbin',(req,res)=>{
    const sql="INSERT INTO counta(`compostingbin`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertbush',(req,res)=>{
    const sql="INSERT INTO counta(`bush`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertbluerecyclingbin',(req,res)=>{
    const sql="INSERT INTO counta(`bluerecyclingbin`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.post('/counta/insertvegetablegarden',(req,res)=>{
    const sql="INSERT INTO counta(`vegetablegarden`) VALUES (1)";
    db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    });
});

app.listen(8081, ()=>{
    console.log("listening");
})
