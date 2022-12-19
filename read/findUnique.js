import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/** If the user doesn't exist, Prisma Client will return null */
const user = await prisma.user.findUnique({
  where: {
    email: "nilu@prisma.io",
  }
})

console.log(user)