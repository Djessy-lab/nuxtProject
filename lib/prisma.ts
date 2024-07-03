import { PrismaClient } from '@prisma/client'
import { PrismaClientExtends } from '@prisma/client/extension';

const prismaClientSingleton = () => {
  return new PrismaClientExtends()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
