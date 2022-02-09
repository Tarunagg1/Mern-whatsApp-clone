import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connection from './config/db.js';
import routes from './routes/Route.js';

connection();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = process.env.PORT || 4000;


app.use('/',routes);

app.listen(PORT,()=>{
    console.log('Server listening on port '+PORT);
});

