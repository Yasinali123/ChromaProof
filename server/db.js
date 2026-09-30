import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_EVIDENCE_RECORDS, KIT_PROFILES, RESEARCH_REFERENCES } from '../src/data/evidenceData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize db.json if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  const initialData = {
    records: INITIAL_EVIDENCE_RECORDS,
    kits: KIT_PROFILES,
    research: RESEARCH_REFERENCES
  };
  fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
}

export function getDbData() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json, returning initial memory data:', err);
    return {
      records: INITIAL_EVIDENCE_RECORDS,
      kits: KIT_PROFILES,
      research: RESEARCH_REFERENCES
    };
  }
}

export function saveDbData(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing to db.json:', err);
  }
}
