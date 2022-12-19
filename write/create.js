import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const user = await prisma.user.create({
  data: {
    age: 12,
    name: "Søren Bramer-Schmidt",
    email: "schmidt@prisma.io",
    role: "ADMIN",
    country: "Germany",
  },
});

console.log(`Created user: `, user);
