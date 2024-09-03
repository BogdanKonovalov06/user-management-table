import { Filter, User } from '../interfaces/User';

export const filterUsers = (users: User[], filter: Filter): User[] => {
  const filterKeys = Object.keys(filter) as (keyof Filter)[];

  return users.filter((user) =>
    filterKeys.every((key) =>
      filter[key]
        ? user[key]?.toLowerCase().includes(filter[key]!.toLowerCase())
        : true
    )
  );
};
