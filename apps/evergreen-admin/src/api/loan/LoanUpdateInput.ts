import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanUpdateInput = {
  endDate?: Date | null;
  interestRate?: number | null;
  loanAmount?: number | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
