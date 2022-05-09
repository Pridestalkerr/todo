import { Activity, PrismaClient, Todo, Prisma, User } from "@prisma/client";

import argon2 from "argon2";
const prisma = new PrismaClient();

// create({
//   title: "DASdas",
//   description: "Dasdas",
//   activity: {
//     connect: {
//       id:
//     },
//     create: {

//     }
//   }
// })


/*

joi schema => api/v1/routes/index.js

*/

export default {
  find: async (id: number) => {
    await prisma.todo.findUnique({
      where: {
        id,
      },
    });
  },

  create: async (user: User, todo: Todo, activity: Activity) => {
    data: Prisma.TodoCreateInput = 
    const todo: Todo = await prisma.todo.create({
      data,
    });
  },

  update: async (
    id: Number,
    { old_password, password }: { old_password: string; password: string }
  ) => {
    const todo: Todo = await prisma.todo.update({
      where: {
        id,
        password: await argon2.hash(old_password),
      },
      data: {
        password: await argon2.hash(password),
      },
    });
    // check for failure
  },

  delete: async (id: Number) => {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
  },
};
