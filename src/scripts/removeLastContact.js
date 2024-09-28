import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contact = data ? JSON.parse(data) : [];
    contact.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2), 'utf-8');
  } catch (error) {
    console.error('error');
    throw error;
  }
};

removeLastContact();
