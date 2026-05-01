// lib/data.js
import { readFile } from 'fs/promises';
import path from 'path';

export async function getAllAnimals() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const file = await readFile(filePath, 'utf-8');
    return JSON.parse(file);
}