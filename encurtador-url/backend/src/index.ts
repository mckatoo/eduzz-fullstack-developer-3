import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

import db from './database'
import { redirect } from './routes/redirect'
import { shortenerRoute } from './routes/shortener'

if (!!process.env.NODE_ENV)
    dotenv.config({
        path: `.env.${process.env.NODE_ENV}`
    })

const PORT = process.env.PORT || 8000

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/shorten', shortenerRoute);
app.use('/:hash', redirect);

app.use('/', (_req: Request, res: Response) => {
    res.json({ message: 'ok' });
});

const server = app.listen(PORT, () => {
    console.log(`listem on ${PORT}!`);
});

process.on('SIGTERM', () => {
    db.disconnect().then(() => {
        console.log('database connection closed!')
    });
    server.close(() => {
        console.log(`server on ${PORT} closed!`);
    });
})

