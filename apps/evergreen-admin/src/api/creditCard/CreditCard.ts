import { User } from "../user/User";

export type CreditCard = {
  cardNumber: string | null;
  cardType?: "Option1" | null;
  createdAt: Date;
  creditLimit: number | null;
  expirationDate: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
