"module"
const json = require("./jsondata.json");
import { dataSchema } from '../models/schema';
export async function loadData() {
  try {
    await dataSchema.create(json);
    console.log("Data Sucessfully Loaded");
    
  } catch (error) {
    console.log(error)
    
  }
  
}