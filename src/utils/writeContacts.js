import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (data) => {
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
};
