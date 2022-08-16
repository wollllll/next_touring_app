import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const spot = async () => {
    await prisma.spot.createMany({
        data: [
            {
                userId: 'cl6v6cn0z0077lytwr42w1o7d',
                title: 'spot1',
                startLng: 138.902741,
                startLat: 35.138996,
                endLng: 138.90880,
                endLat: 35.138716,
                path: JSON.stringify([
                    {
                        lng: 138.902741,
                        lat: 35.138996
                    },
                    {
                        lng: 138.908805,
                        lat: 35.138716
                    }
                ])
            },
            {
                userId: 'cl6v6cn0z0077lytwr42w1o7d',
                title: 'spot2',
                startLng: 138.889670,
                startLat: 35.139788,
                endLng: 138.890221,
                endLat: 35.135132,
                path: JSON.stringify([
                    {
                        lng: 138.889670,
                        lat: 35.139788
                    },
                    {
                        lng: 138.889744,
                        lat: 35.136602
                    },
                    {
                        lng: 138.890221,
                        lat: 35.135132
                    }
                ])
            },
        ]
    })
};
