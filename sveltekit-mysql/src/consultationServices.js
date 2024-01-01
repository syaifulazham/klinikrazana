// src/consultationService.js
import pool from './db';

export async function getConsultationBills() {
  const [rows] = await pool.execute('SELECT * FROM consultationbill');
  return rows;
}

// Add other functions for CRUD operations as needed
