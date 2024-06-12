import { TransactionCreateNestedManyWithoutBankAccountsInput } from "./TransactionCreateNestedManyWithoutBankAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountCreateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  bankName?: string | null;
  transactions?: TransactionCreateNestedManyWithoutBankAccountsInput;
  user?: UserWhereUniqueInput | null;
};
