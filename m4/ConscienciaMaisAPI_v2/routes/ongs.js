import express from 'express';
import fs from 'fs';

const router = express.Router();
const ongs = JSON.parse(fs.readFileSync('./data/ongs.json', 'utf-8'));

router.get('/', (req, res) => {
    res.json(ongs);
});

export default router;