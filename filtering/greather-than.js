import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = await prisma.user.findMany({
  where: {
    age: {
      gt: 25
      /** Use the intellisense to discover other filter conditions. 
       *  Hint. Use `CMD`/`CTRL` + `space` view the auto-completion options
       */
    }
  }
})

console.log(users)