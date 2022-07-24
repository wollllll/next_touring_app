import {PrismaClient} from '@prisma/client';
import {user} from './user';

const prisma = new PrismaClient();

const main = async () => {
    await user()
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
