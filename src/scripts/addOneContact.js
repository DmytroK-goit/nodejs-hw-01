import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    data.push(createFakeContact());
    await writeContacts(data);
    console.log('Додано 1 контакт');
  } catch (error) {
    console.log(console.error(error));
  }
};

addOneContact(1);
