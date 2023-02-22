import { User } from "../../schemas/user-schema";

export const createUser = async (user: any) => {
  const newUser = new User(user);
  
  try {
    await newUser.save();
    return true
  } catch (error) {
    console.log(error);
    return false
  }
};

export const getUser = async (id: string) => {
    try {
      const user = await User.findById(id)
      return user
    } catch (error) {
      console.log(error);
    }
}

export const getAllUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (id: string) => {
  try {
    const userToDelete = await User.findById(id);
    if (!userToDelete) return false

    await userToDelete?.delete();
    return true
  } catch (error) {
    console.log(error);
    return false
  }
}