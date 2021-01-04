// Перепиши функцию toggleUserState() так, чтобы она не 
// использовала callback-функцию callback, а принимала всего 
// два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const updatedUsers = allUsers.map(user =>
//     const toggleUserState = (allUsers, userName, callback) => {
//   user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

/* Сейчас работает так */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user);

    return Promise.resolve(updatedUsers);
};
  
const logger = updatedUsers => console.table(updatedUsers);

  /** Должно работать так*/
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
