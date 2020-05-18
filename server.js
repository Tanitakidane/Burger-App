const express=require("express");
const app=express();
const handlebars = require('express-handlebars');
const controller=require('./controllers/burger_controllers')
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts/',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",controller.getController);

app.post("/data",controller.insert);


app.post("/devour",controller.devour);



app.listen(3000,()=>{
    console.log("Server started");
})