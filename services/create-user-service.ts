import { User } from "../schemas/user-schema";

export const createUser = async (user: any) => {
  const newUser = new User(user);

  await newUser.save();

  return newUser;
};