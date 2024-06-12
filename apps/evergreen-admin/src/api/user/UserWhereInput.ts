import { BankAccountListRelationFilter } from "../bankAccount/BankAccountListRelationFilter";
import { CreditCardListRelationFilter } from "../creditCard/CreditCardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type UserWhereInput = {
  bankAccounts?: BankAccountListRelationFilter;
  creditCards?: CreditCardListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loans?: LoanListRelationFilter;
  username?: StringFilter;
};
