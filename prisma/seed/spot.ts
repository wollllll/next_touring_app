import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const spot = async () => {
    await prisma.spot.createMany({
        data: [
            {
                user_id: 1,
                title: 'spot1',
                position: [
                    {
                        lat: 35.138996,
                        lng: 138.902741
                    },
                    {
                        lat: 35.138716,
                        lng: 138.908805
                    },
                    {
                        lat: 35.136195,
                        lng: 138.910586
                    }
                ]
            },
            {
                user_id: 1,
                title: 'spot2',
                position: [
                    {
                        lat: 35.138996,
                        lng: 138.902741
                    },
                    {
                        lat: 35.138716,
                        lng: 138.908805
                    },
                    {
                        lat: 35.136195,
                        lng: 138.910586
                    }
                ]
            },
        ]
    })
};
