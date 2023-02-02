const express=require('express');
const fs=require('fs').promises;
const PORT=8899;
const app=express();
//synchronous way
// app.get("/",(req,res,next)=>{
//     try{
//     throw new Error("Default error");
//     }
//     catch(err){
//         next(err)
//     }
//  })
// app.get("/",(req,res,next)=>{
//      setTimeout(()=>{
//         try{
//                 console.log("Asynchrnous")
//                 throw new Error("Default error");
//                 }
//                 catch(err){
//                     next(err)
//                 }
//      },1000)
// })
app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/first",(req,res,next)=>{
     fs.readFile('./first.txt')
     .then(data=> res.send(data))
     .catch(err=>{
        //  console.log(err);
        //  res.status(500).send(err);
        next(err);
     })
})
app.get("/second",(req,res,next)=>{
    fs.readFile('./second.txt')
    .then(data=> res.send(data))
    .catch(err=>{
        // console.log(err);
        // res.redirect('/error')
        err.type='redirect';
        next(err);
    })
})
app.get("/error",(req,res)=>{
    res.send("Custom error page");
})
app.use((error,req,res,next)=>{
      console.log("Custom error middleware");
      console.log("Error : ",error);
      if(error.type=="redirect"){
        res.redirect("/error");
      }
      else if(error.type=='time-out'){
        res.status(408).send(error)
      }
      else {
        res.status(500).send(error)
      }
})
app.listen(PORT,(err)=>{
   if(err) throw err;
   else console.log(`Work on ${PORT}`)
})