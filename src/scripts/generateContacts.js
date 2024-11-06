import { PATH_DB } from '../constants/contacts'; // Шлях до файлу db.json
import fs from 'node:fs/promises'; // Використовуємо fs.promises для роботи з файлами асинхронно
import { createFakeContact } from '../utils/createFakeContact.js'; // Функція для створення фейкового контакту

// Функція для генерації нових контактів та додавання їх до існуючих
const generateContacts = async (number) => {
  try {
    // Читаємо поточні контакти з db.json
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = data ? JSON.parse(data) : []; // Якщо файл порожній, створюємо порожній масив

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, createFakeContact);

    // Додаємо нові контакти до існуючих
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо оновлений масив контактів назад у db.json
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

// Викликаємо функцію для генерації нових контактів
generateContacts(5); // Наприклад, генеруємо 5 нових контактів
