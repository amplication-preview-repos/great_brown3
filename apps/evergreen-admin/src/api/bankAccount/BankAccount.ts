import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type BankAccount = {
  accountNumber: string | null;
  accountType?: "Option1" | null;
  balance: number | null;
  bankName: string | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
