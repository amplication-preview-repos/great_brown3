import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  interestRate?: FloatNullableFilter;
  loanAmount?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
