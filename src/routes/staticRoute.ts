import express from 'express';
import {getAllData} from '../controllers/sampleData.controller'
export const router = express.Router();
router.get('/data', getAllData);
