import { dataSchema } from '../models/schema';
import {Request,Response} from 'express'
export async function getAllData(req:Request,res:Response) {
  
  try {
    const data = await dataSchema.find();
    if (data) return res.json({ data}).status(204);
  } catch (error) {
    res.json({ error: error }).status(404);
  }
}