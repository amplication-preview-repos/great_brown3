import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CreditCardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cardNumber" source="cardNumber" />
        <SelectInput
          source="cardType"
          label="cardType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="creditLimit" source="creditLimit" />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
