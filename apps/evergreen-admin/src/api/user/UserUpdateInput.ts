import { BankAccountUpdateManyWithoutUsersInput } from "./BankAccountUpdateManyWithoutUsersInput";
import { CreditCardUpdateManyWithoutUsersInput } from "./CreditCardUpdateManyWithoutUsersInput";
import { LoanUpdateManyWithoutUsersInput } from "./LoanUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bankAccounts?: BankAccountUpdateManyWithoutUsersInput;
  creditCards?: CreditCardUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
