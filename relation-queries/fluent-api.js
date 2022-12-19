import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/** 
 * The Fluent API lets you traverse relations of your models using function calls
 * The last function call determines the return type of the entire query
 * 
 * Docs: https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#fluent-api
 */
const posts = await prisma.user
  .findUnique({
    where: { email: "ada@lovelace.dev" }
  })
  .posts()

console.log(posts)