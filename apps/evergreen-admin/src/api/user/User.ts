import { BankAccount } from "../bankAccount/BankAccount";
import { CreditCard } from "../creditCard/CreditCard";
import { Loan } from "../loan/Loan";
import { JsonValue } from "type-fest";

export type User = {
  bankAccounts?: Array<BankAccount>;
  createdAt: Date;
  creditCards?: Array<CreditCard>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loans?: Array<Loan>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
