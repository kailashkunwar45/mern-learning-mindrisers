



export const getUsersFromLocal = () => {
  const users = localStorage.getItem('users');
  return users === null ? [] : JSON.parse(users);
}


export const setUsersToLocal = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
}
