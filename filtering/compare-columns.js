import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany({
  where: {
    createdAt: !prisma.user.fields.updatedAt
  }
})

console.log(users)