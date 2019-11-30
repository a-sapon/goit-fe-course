'use strict';

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:
// --проходить проверку на длину от 4 до 16-ти символов включительно
// --быть уникален, то есть отсутствовать в массиве logins
// --Разбей задачу на подзадачи с помощью функций.

const task7 = () => {
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

  const isLoginValid = login => {
    if (login.length >= 4 && login.length <= 16) {
      return true;
    } else {
      return false;
    }
  };

  const isLoginUnique = (allLogins, login) => {
    if (allLogins.includes(login)) {
      return false;
    } else {
      return true;
    }
  };

  const addLogin = (allLogins, login) => {
    if (!isLoginValid(login)) {
      return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (!isLoginUnique(allLogins, login)) {
      return console.log('Такой логин уже используется!');
    } else {
      allLogins.push(login);
      console.log(`Логин "${login}" успешно добавлен!`);
      console.log(allLogins);
    }
  };

  addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
  addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
  addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  addLogin(logins, 'anichka');
};