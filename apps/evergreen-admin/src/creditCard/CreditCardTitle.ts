import { CreditCard as TCreditCard } from "../api/creditCard/CreditCard";

export const CREDITCARD_TITLE_FIELD = "cardNumber";

export const CreditCardTitle = (record: TCreditCard): string => {
  return record.cardNumber?.toString() || String(record.id);
};
