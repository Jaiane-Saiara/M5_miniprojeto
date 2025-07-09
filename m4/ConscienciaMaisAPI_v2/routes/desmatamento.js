import express from 'express';
import fs from 'fs';

const router = express.Router();
const desmatamento = JSON.parse(fs.readFileSync('./data/desmatamento.json', 'utf-8'));

router.get('/', (req, res) => {
    res.json(desmatamento);
});

export default router;