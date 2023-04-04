import { AuthInterface } from "../interfaces/auth.interface";
import { UserInterface } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerUser = async ({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  avatar,
}: UserInterface) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    firstName,
    lastName,
    phoneNumber,
    avatar,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: AuthInterface) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "EMAIL_OR_PASSWORD_INVALID";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "EMAIL_OR_PASSWORD_INVALID";

  const token = await generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerUser, loginUser };
