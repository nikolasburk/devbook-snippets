/**
 * Prisma Client extensions are currently in Preview. Add the `clientExtensions` Preview feature to your `generator` block:
 * 
 * ```
 * generator client {
 *   provider        = "prisma-client-js"
 *   previewFeatures = ["clientExtensions"]
 * }
 * ```
 * 
 * Learn more: https://www.prisma.io/blog/client-extensions-preview-8t3w27xkrxxn
 * 
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  result: {
    user: {
      // Add a `save` method to `user`
      save: {
        needs: { id: true, email: true },
        compute({ id, email }) {
          return () => prisma.user.update({ where: { id }, data: { email } });
        },
      },

      // Add a `delete` method to `user`
      delete: {
        needs: { id: true },
        compute({ id }) {
          return () => prisma.user.delete({ where: { id } });
        },
      },
    },
  },
});

// Create a new user
const user = await prisma.user.create({
  data: { 
    email: "burk@graph.cool",
    age: 42,
    country: "Germany",
    name: "Nikolas Burk",
  },
});
console.log(`Created user: `, user)

// Update the `email` locally  
user.email = "burk@prisma.io";
console.log(`Changed email of user locally to: `, user)

// Persist the local change in the DB
await user.save();
console.log(`Updated email of user in DB.`)

// Delete the user 
await user.delete();
console.log(`Deleted the user.`)
