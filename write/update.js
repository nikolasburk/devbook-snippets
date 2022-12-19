import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const user = await prisma.user.update({
  where: {
    email: "ruheni@prisma.io",
  },
  data: {
    age: {
      increment: 1,
    },
  },
});

console.log(`User: `, user);
