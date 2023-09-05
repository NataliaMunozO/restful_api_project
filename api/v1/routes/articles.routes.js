//Creamos el router para poder usar los verbos HTTP
const {Router} = require('express');
//Incluimos nuestro controlador de article
const articleController = require('../../../controllers/articleController');
const router = Router(); //Llamamos al método Router de Express

//req => request => En request llegan los datos del body
//res => response => Se envían  los datos hacia el cliente

router.get("/", articleController.getAllArticles);
router.get("/:ArticleId", articleController.getArticle);
router.post("/", articleController.createArticle);
router.put("/:ArticleId", articleController.updateArticle);
router.delete("/:ArticleId", articleController.deleteArticle);

module.exports = router;