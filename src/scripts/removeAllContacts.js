import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = [];
    await writeContacts(data);
    console.log('Список контактів очищено');
  } catch (error) {
    console.log(console.error(error));
  }
};

removeAllContacts();
