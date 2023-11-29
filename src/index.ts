import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { run } from './database/db.config';
import { router } from './routes/staticRoute';
import { loadData } from './database/loadData';
// loadData();
run().catch(console.dir);
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5141
app.listen(PORT,()=>console.log(`Server Up With PortNumber is `,PORT))

app.use('/api', router);