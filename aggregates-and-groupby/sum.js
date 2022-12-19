import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const summedAge = await prisma.user.aggregate({
  _sum: {
    age: true,
  }
})

console.log(summedAge)