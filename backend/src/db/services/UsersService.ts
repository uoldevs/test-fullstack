const Users = require("../models/Users");
const Sequelize = require("sequelize");
const config = require("../config/config");

interface User {
  id: Number,
  username: String,
  email: String,
  cpf: String,
  status: String,
  phone: String,
}

const removePunctuation = (string: String) => {
  return string.replace(/[^\d]/g, '');
}

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

export async function getUsers() {
  try {
  const users = await Users.findAll();
    return users.sort((a: User, b: User) => Number(a.id) - Number(b.id));
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}

export async function createUser(body: User) {
  const t = await sequelize.transaction();
  try {
    const { username, email, phone, status, cpf } = body;
    const allUsers = await Users.findAll();
    const { id } = allUsers[(allUsers.length - 1)];
    const checkEmail = await Users.findOne({ where: { email } });
    const checkCpf = await Users.findOne({ where: { cpf } });
    if (!checkEmail && !checkCpf) {
      const formatedCpf = removePunctuation(cpf);
      const formatedPhone = removePunctuation(phone);
      const create = await Users.create(
        { id: (id + 1), username, email, phone: formatedPhone, status, cpf: formatedCpf },
        { transaction: t }
      );
      await t.commit();
      return create;
    }
    await t.rollback();
    return null;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
}


export async function updateUser(body: User) {
  const t = await sequelize.transaction();
  try {
    const { id, username, email, phone, status, cpf } = body;
    const user = await Users.findOne({ where: { id } });
    if (user) {
      const formatedCpf = removePunctuation(cpf);
      const formatedPhone = removePunctuation(phone);
      const create = await user.update(
        { username, email, phone: formatedPhone, status, cpf:formatedCpf },
        { transaction: t }
      );
      await t.commit();
      return create;
    }
    await t.rollback();
    return null;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
}