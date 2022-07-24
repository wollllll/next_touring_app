import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const user = async () => {
    await prisma.user.createMany({
        data: [
            {
                name: 'test',
                email: 'test@test'
            },
            {
                name: 'test2',
                email: 'test2@test'
            }
        ]
    })
};
