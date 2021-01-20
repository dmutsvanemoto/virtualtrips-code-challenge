import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import cors from 'cors';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;

app.use(bodyparser.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});