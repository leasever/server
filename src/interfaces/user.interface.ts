import { AuthInterface } from "./auth.interface";

export interface UserInterface extends AuthInterface {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  avatar: string;
}
