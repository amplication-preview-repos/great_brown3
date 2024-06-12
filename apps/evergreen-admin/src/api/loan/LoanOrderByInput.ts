import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  interestRate?: SortOrder;
  loanAmount?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
