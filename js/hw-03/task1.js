'use strict'

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`Key: ${key}, Value: ${user[key]}`);
}

// ПОЧЕМУ СВОЙСТВА НЕ МЕНЯЮТСЯ ТАКИМ СПОСОБОМ?
// let { mood, hobby, premium } = user;

// mood = 'happy';
// hobby = 'skydiving';
// premium = false;