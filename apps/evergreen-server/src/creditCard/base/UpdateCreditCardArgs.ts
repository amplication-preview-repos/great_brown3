/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreditCardWhereUniqueInput } from "./CreditCardWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreditCardUpdateInput } from "./CreditCardUpdateInput";

@ArgsType()
class UpdateCreditCardArgs {
  @ApiProperty({
    required: true,
    type: () => CreditCardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreditCardWhereUniqueInput)
  @Field(() => CreditCardWhereUniqueInput, { nullable: false })
  where!: CreditCardWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CreditCardUpdateInput,
  })
  @ValidateNested()
  @Type(() => CreditCardUpdateInput)
  @Field(() => CreditCardUpdateInput, { nullable: false })
  data!: CreditCardUpdateInput;
}

export { UpdateCreditCardArgs as UpdateCreditCardArgs };
