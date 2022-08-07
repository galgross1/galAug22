import express from 'express';
const router = express.Router();

import {login, register,getUser} from '../controllers/validCont';

router
    .post('/login', login)
    .post('/register', register)
    .get('/get-user', getUser)

export default router