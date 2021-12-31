const express = require("express");
const app = express();

// port for heroku
// heroku knows to look at environment variables for port number
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`connected to port: ${PORT}`))
// Route Handlers
app.get('/',(req,res)=>{
    res.json({message:'hello'})
})