const mysql =require("./connection");

const orm={}

orm.selectAllNoDevoured=async function()
{
    let _Data=await mysql.query("select burgername,id from burgers where devoured=0");
    

    return _Data;


}



orm.selectAllDevoured=async function()
{

    return await mysql.query("select burgername from burgers where devoured=1");


}


orm.insertOne=async function(burgername,isdevoured)
{

    return await mysql.query(`insert into burgers(burgername,devoured) values('${burgername}',${isdevoured})`)
}


orm.updateOne=async function(id,isdevoured)
{
    return await mysql.query(`update burgers set devoured=${isdevoured} where id=${id}`);

}

module.exports=orm;