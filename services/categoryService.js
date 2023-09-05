const db = require('../models')

const getAllCategories = async() =>{
    try{
        let Categories = await db.Category.findAll({
            //Con esta opción permitimos mostrar los artículos con la información del usuario
            // include:{
            //     model: db.User,
            //     required : true,
            //     as : "User",
            //     attributes :["id", "name", "email"],
            // },
        });
        return Categories;
    }catch(error){
        return error.message || "Failed to get Categories";
    }
}

const getCategory = async(id) =>{
    try {
        let Category = await db.Category.findByPk(id);
        return Category;
    } catch (error) {
        throw { status:500 , message:'Failed to get Category'};
       
    }
    
}

const createCategory = async(name)=>{
    try {
         const newCategory = await db.Category.create({
            name
         })
        return newCategory;
    } catch (error) {
        return error.message || "Category could not be created";
    }
   
}

const updateCategory = async(id,name) =>{
    try {
        let updatedCategory = await db.Category.update({
            name
        },{
            where:{id,}
        });
        return updatedCategory
    } catch (error) {
        return error.message || "Category could not be updated";
    }
}

const deleteCategory = async(id)=>{
   try {
     const deletedCategory = await db.Category.destroy({
        where:{
            id,
        }
     });
     return deletedCategory;
   } catch (error) {
        return error.message || "Category could not be deleted";
   }
}

module.exports ={
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}