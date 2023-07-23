const catchError = require('../utils/catchError');
const User = require('../models/User');

//Obtener todos los usuarios
const getAll = catchError(async(req, res) => {
    const user= await User.findAll()
    return res.json(user)
});

//crear un usuario
const createUser = catchError(async(req, res) => {    
    const user= await User.create(req.body)
    return res.status(201).json(user)
});

//obtener un usuario
const getOneUser=catchError(async(req,res)=>{
    const id=req.params.id
    const user=await User.findByPk(id)
    if(!user) return res.sendStatus(400)
    return res.json(user)
})

//eliminar un usuario
const deleteUser=catchError(async(req,res)=>{
    const id=req.params.id
    await User.destroy({where:{id}})
    return res.sendStatus(204)
})

//actualizar un registro

const updateRegister=catchError(async(req,res)=>{
    const id=req.params.id
    const user=await User.update(req.body,{where:{id},returning:true})
    if(user[0]===0) return res.sendStatus(400)
    return res.status(200).json(user[1][0])
})

module.exports = {
    getAll,
    createUser,
    getOneUser,
    deleteUser,
    updateRegister
}