import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CreditCardWhereInput = {
  cardNumber?: StringNullableFilter;
  cardType?: "Option1";
  creditLimit?: FloatNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
