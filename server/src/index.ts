import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import cors from 'cors';
import SQLite3 from 'sqlite3';

var sqlite3 = SQLite3.verbose();
var db = new sqlite3.Database('../data/virtualtrips.db');

var getAll = ():Promise<any[]> => {
    var sql = `SELECT * FROM geonames`

    return new Promise((resolve, reject) => {
        db.all(sql, function(err, rows) {
            if(err)
            {
                console.log('Error running sql ' + sql)
                console.log(err)
                reject(err)
            }
                resolve(rows);
        });
    });
}

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;

app.use(bodyparser.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

app.get('/locations', (req: express.Request, res: express.Response) => {
    getAll().then(data => res.status(200).send(data));
});
  
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;