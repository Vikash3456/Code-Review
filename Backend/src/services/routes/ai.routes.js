const express=require('express');
const aiController =required("../controllers/ai.controllers")
const router= express.Router();

router.post("/get-review",aiController.aiControllers.getReview);


module.exports=router;
