import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CreditCardCreateInput = {
  cardNumber?: string | null;
  cardType?: "Option1" | null;
  creditLimit?: number | null;
  expirationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
