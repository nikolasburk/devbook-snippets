import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** Delete all the users from the database */
const updatedUserInfo = await prisma.user.updateMany({
  data: {
    age: {
      increment: 1,
    },
  },
});

/** Alternatively, you can add arguments to specify which users should be updated */
// const updatedUserInfo = await prisma.user.updateMany({
//   where: {
//     email: {
//       endsWith: "@prisma.io",
//     },
//   },
//   data: {
//     age: {
//       increment: 1,
//     },
//   },
// });

console.log(`Updated ${updatedUserInfo.count} users`);
