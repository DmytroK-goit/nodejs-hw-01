import { faker } from '@faker-js/faker';

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
export const contacts = faker.helpers.multiple(createFakeContact, {
  count: 5,
});
