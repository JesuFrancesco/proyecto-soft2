import { PrismaClient, Account } from "@prisma/client";
import boom from "@hapi/boom";

class AccountService {
  private prisma = new PrismaClient();

  async findOneAccount(userId: number): Promise<Account> {
    const user = await this.prisma.account.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw boom.notFound();
    }

    return user;
  }

  async findAllAccounts(): Promise<Account[]> {
    const users = await this.prisma.account.findMany();
    return users;
  }

  async createAccount(data: Account): Promise<Account> {
    const user = await this.prisma.account.upsert({
      where: {
        email: data.email,
      },
      create: data,
      update: data,
    });
    return user;
  }
}

export default AccountService;
