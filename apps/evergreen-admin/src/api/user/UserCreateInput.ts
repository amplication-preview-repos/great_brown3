import { BankAccountCreateNestedManyWithoutUsersInput } from "./BankAccountCreateNestedManyWithoutUsersInput";
import { CreditCardCreateNestedManyWithoutUsersInput } from "./CreditCardCreateNestedManyWithoutUsersInput";
import { LoanCreateNestedManyWithoutUsersInput } from "./LoanCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bankAccounts?: BankAccountCreateNestedManyWithoutUsersInput;
  creditCards?: CreditCardCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
