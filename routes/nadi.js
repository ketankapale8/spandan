import express from 'express';

import { addNadiData } from '../controllers/Nadi.js';
// import { addDiseasesData } from '../controllers/Diseases.js';
// import { addVaastuData } from '../controllers/Vaastu.js';
// import { addBodyPartsData } from '../controllers/BodyParts.js';
const router = express.Router();

// router.post("/addpositivenegative" , addPositiveNegativeData);
// router.post("/addchakra" , addChakraData);
router.post("/addnadi" , addNadiData);
// router.post("/adddiseases" , addDiseasesData);
// router.post("/addvaastu" , addVaastuData);
// router.post("/addbodyparts" , addBodyPartsData);

// 







export default router;


