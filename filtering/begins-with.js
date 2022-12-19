import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany({
  where: {
    name: {
      startsWith: 'A'
    }
  }
})

console.log(users)