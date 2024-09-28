import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const count = data ? JSON.parse(data) : [];
    return count.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
