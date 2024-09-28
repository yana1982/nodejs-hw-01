import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts;
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = data ? JSON.parse(data) : [];
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
