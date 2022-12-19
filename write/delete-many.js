import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** Delete all the users from the database */
const deletedUserInfo = await prisma.user.deleteMany();

/** Alternatively, you can add arguments to specify which users should be deleted */
// const deletedUserInfo = await prisma.user.deleteMany({
//   where: {
//     email: {
//       endsWith: "@prisma.io"
//     }
//   }
// })

console.log(`Deleted ${deletedUserInfo.count} users`);
