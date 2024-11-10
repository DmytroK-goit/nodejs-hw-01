import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    data.pop();
    await writeContacts(data);
    console.log('Видалено 1 контакт');
  } catch (error) {
    console.log(console.error(error));
  }
};

removeLastContact();
