import { TransactionUpdateManyWithoutBankAccountsInput } from "./TransactionUpdateManyWithoutBankAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: "Option1" | null;
  balance?: number | null;
  bankName?: string | null;
  transactions?: TransactionUpdateManyWithoutBankAccountsInput;
  user?: UserWhereUniqueInput | null;
};
