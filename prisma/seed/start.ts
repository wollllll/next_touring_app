import {PrismaClient} from '@prisma/client';
import {user} from './user';
import {spot} from './spot';
import {account} from "./account";

const prisma = new PrismaClient();

const main = async () => {
    await user()
    await account()
    await spot()
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
