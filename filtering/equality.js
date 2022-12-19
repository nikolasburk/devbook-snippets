import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const techCategoryPosts = await prisma.category.findFirst({
  where: {
    name: {
      equals: "Tech"
    }
    /**
     * Shorthand version of this would be 👇🏾
     */
    // name: "Tech"
  },
  
}).posts()

console.dir(techCategoryPosts, { depth: Infinity })