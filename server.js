const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("homepage");
})

app.get("/seller-portal",(req, res)=>{
    res.render("sellerPortal")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



