import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  balance?: SortOrder;
  bankName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
