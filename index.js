const express = require("express");
const app = express();
app.use(express.json())



app.post('/webhook',(req, res)=>{
    console.log('github data ', req.body.aciton)
    res.send('ok');
})

const PORT = 3000;
app.listen(PORT, ()=> console.log(`Server start at https://locahost//${PORT}`));