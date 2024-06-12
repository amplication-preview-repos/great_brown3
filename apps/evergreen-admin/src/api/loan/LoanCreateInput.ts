import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanCreateInput = {
  endDate?: Date | null;
  interestRate?: number | null;
  loanAmount?: number | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
