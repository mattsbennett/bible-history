import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialEvents = [
  { name: 'Post 1' },
  { name: 'Post 2' },
  { name: 'Post 3' },
];

const seed = async () => {
  // clean up before the seeding (optional)
  await prisma.events.deleteMany();

  // you could also use createMany
  // but it is not supported for databases
  // e.g. SQLite https://github.com/prisma/prisma/issues/10710
  for (const post of initialEvents) {
    await prisma.events.create({
      data: post,
    });
  }
};

seed();