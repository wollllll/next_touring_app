import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const user = async () => {
    await prisma.user.createMany({
        data: [
            {
                id: 'cl6v6cn0z0077lytwr42w1o7d',
                name: 'たかひろ',
                image: 'https://pbs.twimg.com/profile_images/1522950363783241729/w0dIiTlP_normal.jpg'
            },
        ]
    })
};
