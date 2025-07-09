import express from 'express';
import livrosRouter from './routes/livros.js';
import desmatamentoRouter from './routes/desmatamento.js';
import ongsRouter from './routes/ongs.js';
import frasesRouter from './routes/frases.js';

const app = express();
const PORT = 3000;

app.use('/livros-antirracismo', livrosRouter);
app.use('/dados-desmatamento', desmatamentoRouter);
app.use('/ongs-confiaveis', ongsRouter);
app.use('/frases-inspiradoras', frasesRouter);

app.listen(PORT, () => {
    console.log(`API Consciência+ rodando na porta ${PORT}`);
});