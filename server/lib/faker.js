import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const getUsers = (take) => {
  const users = [];

  for (let index = 0; index < +take; index++) {
    
    const user = {};
    user.id = uuidv4();
    user.name = faker.name.findName();
    user.email = faker.internet.email();

    users.push(user);
  }

  return users;
};
