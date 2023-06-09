import { sign, verify } from "jsonwebtoken";
const JWT_SECRET =
  process.env.JWT_SECRET || "token.2352x1ddd_WWWccx23#zzzzASeee444#$$$%%";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};
const verifyToken = async () => {};

export { generateToken, verifyToken };
