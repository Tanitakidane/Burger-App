const orm=require("../config/orm");

async function selectAllBurgers()
{
    return await orm.selectAllNoDevoured();
}

async function selectAllDevoured()
{

    return await orm.selectAllDevoured();
}


async function insertOneBurger(burger,isdevoured)
{
    return await orm.insertOne(burger,isdevoured);
}



async function updateOneBurger(id,isdevoured)
{
    return await orm.updateOne(id,isdevoured);
}


module.exports={selectAllBurgers,insertOneBurger,updateOneBurger,selectAllDevoured};