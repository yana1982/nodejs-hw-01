import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contact;
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contact = data ? JSON.parse(data) : [];
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    contact.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
