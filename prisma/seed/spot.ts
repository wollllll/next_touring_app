import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const spot = async () => {
    await prisma.spot.createMany({
        data: [
            {
                user_id: 1,
                title: 'spot1',
                start_lng: 138.902741,
                start_lat: 35.138996,
                end_lng: 138.90880,
                end_lat: 35.138716,
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
                user_id: 1,
                title: 'spot2',
                start_lng: 138.889670,
                start_lat: 35.139788,
                end_lng: 138.890221,
                end_lat: 35.135132,
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
