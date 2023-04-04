import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerUser(body);
  res.send(responseUser);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "EMAIL_OR_PASSWORD_INVALID") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
