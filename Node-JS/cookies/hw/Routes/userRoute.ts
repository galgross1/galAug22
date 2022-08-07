import express from 'express';
const router = express.Router();

import{getCookie} from "../controllers/userCont"

router.get('/cookie',getCookie )

export default router;