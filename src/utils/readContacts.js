import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const todos = JSON.parse(data);

  return todos;
};
// readContacts()
//   .then(() => console.log('Done'))
//   .catch((error) => console.error(error));
