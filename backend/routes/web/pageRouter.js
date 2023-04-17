import express from 'express';
// import { getIndexPage } from '../controllers/pageController.js';
import { getIndexPage } from '../../controller/pageController.js'
const router = express.Router();

router.get('/', getIndexPage);

export default router;