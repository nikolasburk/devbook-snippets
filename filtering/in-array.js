import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Return user details whose names are "Sonia Lomo" and "Nilu Bava"
 */
const users = await prisma.user.findMany({
  where: {
    name: {
      in: [ "Sonia Lomo", "Nilu Bava" ]
    }
  }
})

console.log(users)