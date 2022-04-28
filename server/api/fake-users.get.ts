import { getUsers } from "../lib/faker";

export default defineEventHandler((event) => {
  const query = useQuery(event);

  const users = getUsers(query.take)

  return { users };
});
