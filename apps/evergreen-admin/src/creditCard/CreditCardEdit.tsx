import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CreditCardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
