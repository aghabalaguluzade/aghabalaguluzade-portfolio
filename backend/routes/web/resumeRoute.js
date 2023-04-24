import express from "express";
import { getResume } from "../../controller/resumeController.js";


const router = express.Router();

router.route('/add')
     .get(getResume)
     // .post(aboutAdd);

export default router;