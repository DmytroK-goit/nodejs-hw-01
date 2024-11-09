import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = data ? JSON.parse(data) : [];
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    console.log(
      `Успішно згенеровано та додано ${number} нових контактів у db.json`,
    );
  } catch (error) {
    console.error('Помилка при обробці файлу db.json:', error);
  }
};

addOneContact(1);
