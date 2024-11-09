import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(data);
  const removedContact = contacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
    encoding: 'utf-8',
  });
  return removedContact;
};

removeLastContact();
