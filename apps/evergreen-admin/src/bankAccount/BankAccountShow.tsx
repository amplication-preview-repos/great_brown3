import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BANKACCOUNT_TITLE_FIELD } from "./BankAccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BankAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accountNumber" source="accountNumber" />
        <TextField label="accountType" source="accountType" />
        <TextField label="balance" source="balance" />
        <TextField label="bankName" source="bankName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Transaction"
          target="bankAccountId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="BankAccount"
              source="bankaccount.id"
              reference="BankAccount"
            >
              <TextField source={BANKACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
