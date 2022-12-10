const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;

app.get("/", (req,res) =>{
    res.send("Hello Developer Server How Are You")
});


app.listen(port, () => {
    console.log(`Listening To The ${port} successfully`)
})