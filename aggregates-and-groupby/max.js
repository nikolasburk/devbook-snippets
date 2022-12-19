import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const maxAge = await prisma.user.aggregate({
  _max: {
    age: true,
  }
})

console.log(maxAge)