import express from 'express';
import fs from 'fs';

const router = express.Router();
const frases = JSON.parse(fs.readFileSync('./data/frases.json', 'utf-8'));

router.get('/', (req, res) => {
    res.json(frases);
});

export default router;