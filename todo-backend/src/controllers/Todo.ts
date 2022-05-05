import { prisma, Todo } from "@prisma/client";

export default {
  find: async (id: Number) => {
    await prisma.todo.findUnique({
      id,
    });
  },

  create: async (email: string, password: string) => {
    const todo: Todo = await prisma.todo.create({
      data: {
        email,
        password: await argon2.hash(password),
      },
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
