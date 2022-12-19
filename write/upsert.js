import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const user = await prisma.user.upsert({
  where: {
    email: "ruheni@prisma.io",
  },
  // If the user exists, increment `age` by 1
  update: {
    age: {
      increment: 1,
    },
  },
  // Otherwise create a whole new user object
  create: {
    name: "Alex Ruheni",
    age: 25,
    email: "ruheni@prisma.io",
    country: "Germany",
  },
});

console.log(`User: `, user);
