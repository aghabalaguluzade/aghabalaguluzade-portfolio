import express from "express";
import { getAboutPage, aboutAdd } from '../../controller/aboutController.js';

const router = express.Router();

router.route('/add')
     .get(getAboutPage)
     .post(aboutAdd);

export default router;