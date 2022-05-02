import express from 'express';
import { adviceByKeywordController } from '../app/controllers/adviceController';

const router = express.Router();

router.get('/', (req, res) => res.send('API IS UP!'));

router.get('/advice/:keyword', adviceByKeywordController);

export default router;
