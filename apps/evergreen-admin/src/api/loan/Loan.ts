import { User } from "../user/User";

export type Loan = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  interestRate: number | null;
  loanAmount: number | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
