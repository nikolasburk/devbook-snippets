import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const averageAge = await prisma.user.aggregate({
  _avg: {
    age: true,
  }
})

console.log(averageAge)