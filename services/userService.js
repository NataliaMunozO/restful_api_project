const db = require('../models')

const getAllUsers = async() =>{
    try{
        let users = await db.User.findAll()
        return users
    }catch(error){
        throw { status:500 , message:'Failed to get all users'};
    }
}

const getUser = async(id) =>{
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw { status:500 , message:'Failed to get user'};
        //return error.message || 'Failed to get user'
    }
    
}

const createUser = async( name, email,phone, password)=>{
    try {
         const newUser = await db.User.create(
            {name,email,phone,password}
        )
        return newUser
    } catch (error) {
        throw { status:500 , message:'User could not be created'};
    }
   
}

const updateUser = async(id,name,email,phone,password) =>{
    try {
        let updatedUser = await db.User.update({
            name,
            email,
            phone,
            password
        },{
            where:{id,}
        });
        return updatedUser
    } catch (error) {
        throw { status:500 , message:'User could not be updated'};
    }
}

const deleteUser = async(id)=>{
   try {
     const deleteUser = await db.User.destroy({
        where:{
            id,
        }
     });
     return deleteUser;
   } catch (error) {
         throw { status:500 , message:'User could not be deleted'};
   }
}

module.exports ={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}