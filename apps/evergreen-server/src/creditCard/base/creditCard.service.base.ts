/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CreditCard as PrismaCreditCard,
  User as PrismaUser,
} from "@prisma/client";

export class CreditCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreditCardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creditCard.count(args);
  }

  async creditCards<T extends Prisma.CreditCardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditCardFindManyArgs>
  ): Promise<PrismaCreditCard[]> {
    return this.prisma.creditCard.findMany<Prisma.CreditCardFindManyArgs>(args);
  }
  async creditCard<T extends Prisma.CreditCardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditCardFindUniqueArgs>
  ): Promise<PrismaCreditCard | null> {
    return this.prisma.creditCard.findUnique(args);
  }
  async createCreditCard<T extends Prisma.CreditCardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditCardCreateArgs>
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.create<T>(args);
  }
  async updateCreditCard<T extends Prisma.CreditCardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditCardUpdateArgs>
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.update<T>(args);
  }
  async deleteCreditCard<T extends Prisma.CreditCardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditCardDeleteArgs>
  ): Promise<PrismaCreditCard> {
    return this.prisma.creditCard.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.creditCard
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
