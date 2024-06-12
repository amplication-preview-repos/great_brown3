import { SortOrder } from "../../util/SortOrder";

export type CreditCardOrderByInput = {
  cardNumber?: SortOrder;
  cardType?: SortOrder;
  createdAt?: SortOrder;
  creditLimit?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
