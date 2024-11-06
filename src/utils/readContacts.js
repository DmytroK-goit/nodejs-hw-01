import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  console.log(data);
};
readContacts()
  .then(() => console.log('Done'))
  .catch((error) => console.error(error));
