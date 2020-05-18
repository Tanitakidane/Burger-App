let model=require("../models/burger");

let controller={}

controller.insert=async function(req,res)
{
try {
    console.log(req.body);
    let burger=req.body.burger;
let isdevoured=false;
await model.insertOneBurger(burger,isdevoured);
res.redirect("/")
    
} catch (error) {
    console.log(error);
    
}


}

controller.devour=async function(req,res)
{

let id=req.body.id;

//console.log(req.body);

await model.updateOneBurger(id,true);

res.redirect("/")

}

controller.getController=async function(req,res)
{

    let _allburgers=JSON.parse(JSON.stringify(await model.selectAllBurgers()));

    let _allDevours=JSON.parse(JSON.stringify(await model.selectAllDevoured()));




console.log(_allDevours);

res.render("index",{burgers:_allburgers,devour:_allDevours});
}


module.exports=controller;