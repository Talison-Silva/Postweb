import MongoDB from './../../MongoDB/index.js';

const mongodb=new MongoDB()

const all=async(req,res)=>{
    await mongodb.all();
    console.log(mongodb.all());
    res.json(mongodb.getAll);
}

const id=async(req,res)=>{
    await mongodb.id(req.params.id);
    console.log(`id : ${mongodb.getId}`);
    res.json(mongodb.getId);
}

const add=(req,res)=>{
    mongodb.add(req.body)
}

const edit=(req,res)=>{
    console.log(`edit: ${req.body}`);
    mongodb.edit(req.body)
}

const del=(req,res)=>{
    mongodb.delete(req.params.id)
}


export default {
    all:all,
    id:id,
    add:add,
    del:del,
    edit:edit
}