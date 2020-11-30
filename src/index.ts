import express from 'express';
import { helloWorld } from './routes';

/**
 * A importação do express está dentro do mesmo
 * aqruivo que suas funcionalidades estão sem usadas.
 * Portanto não é nescessario informar as tipagens.
 */

const app = express();

app.get('/', helloWorld);

app.listen(3333);

