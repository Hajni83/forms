const fsp = require('fs/promises');
const {join} = require('path');
const userModel = require('../model/user.model');


(async () => {
  const userJson = await fsp.readFile(
    join(__dirname, './users.json'),
    'utf-8',
  );
  const users = JSON.parse(userJson);
  await userModel.insertMany(users);
})();
