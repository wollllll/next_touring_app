import {PrismaClient} from '@prisma/client';
import {user} from './user';
import {spot} from './spot';

const prisma = new PrismaClient();

const main = async () => {
    await user()
    await spot()
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
