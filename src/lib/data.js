// lib/data.js
import { readFile } from 'fs/promises';
import path from 'path';

export async function getAllAnimals() {
     const res = await fetch(
    "http://localhost:3000/data.json",
  );
  const data = await res.json();
  return data;
}