import { PrismaClient } from '@prisma/client'

declare global  {
   const client: PrismaClient | undefined;
}

const prismadb = globalThis.client || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalThis.client = prismadb;

export default prismadb;