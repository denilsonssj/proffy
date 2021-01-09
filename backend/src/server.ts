import express from 'express';
import cors from 'cors';

import routes from './routes';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors);

app.listen(PORT);