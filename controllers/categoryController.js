const Categoryservice = require('../services/categoryService');

const getAllCategories = async (req, res) => {
    const allCategories = await Categoryservice.getAllCategories();

    if(allCategories)
        res.status(200).send({status: "OK",data:allCategories});
    else
    res.status(404).send({status: "FAILED", data:allCategories});
};

const getCategory = async (req, res) => {
    let id = req.params.CategoryId;

    try{
        const Category = await Categoryservice.getCategory(id);
        res.status(200).send({status: "OK",data:Category});
    }catch(error){
        res.status(error.status|| 500).send({status: "FAILED", data:{error: error.message}});
    }
};

const createCategory = async (req, res) => {
    const {body} = req;
    const createCategory = await Categoryservice.createCategory(body.name);
    if(createCategory)
        res.status(200).send({status: "OK",data:createCategory});
    else
        res.status(400).send({status: "FAILED", data:createCategory});
};

const updateCategory = async (req, res) => {
    let id = req.params.CategoryId;
    let {name} = req.body;
    const updatedCategory = await Categoryservice.updateCategory(id,name);

    if(updatedCategory)
     res.status(200).send({status: "OK",data:updatedCategory});
    else
        res.status(400).send({status: "FAILED", data:updatedCategory});
};

const deleteCategory = async (req, res) => {
    let id = req.params.CategoryId;
    const deletedCategory = await Categoryservice.deleteCategory(id);
    if(deletedCategory)
        res.status(200).send({status: "OK",data:deletedCategory});
    else
    res.status(400).send({status: "FAILED", data:deletedCategory});

};


module.exports ={
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};