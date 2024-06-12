import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: "Option1";
  balance?: FloatNullableFilter;
  bankName?: StringNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
