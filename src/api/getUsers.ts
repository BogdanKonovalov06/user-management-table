export const getUsers = async () => {
  const link = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(link);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log('Error:', error);
  }
};
