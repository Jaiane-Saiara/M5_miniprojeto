import express from 'express';
import fs from 'fs';

const router = express.Router();
const livros = JSON.parse(fs.readFileSync('./data/livros.json', 'utf-8'));

router.get('/', (req, res) => {
    res.json(livros);
});

export default router;