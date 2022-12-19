import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const email = "ada@lovelace.dev";
const users = await prisma.$queryRaw`
  SELECT * FROM "User" WHERE email = ${email};
`;
console.log(users);
