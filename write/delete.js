import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** Delete all the users from the database */
const deletedUser = await prisma.user.delete({
  where: {
    email: "ruheni@prisma.io",
  },
});

console.log(`Deleted: `, deletedUser);
