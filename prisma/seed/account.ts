import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const account = async () => {
    await prisma.account.createMany({
        data: [
            {
                id: 'cl6v6cn1d0084lytwl8d4rvjj',
                userId: 'cl6v6cn0z0077lytwr42w1o7d',
                type: 'oauth',
                provider: 'twitter',
                providerAccountId: '1144791855877373953',
                refresh_token: 'MGNEdmRxcmx5UUJXem4zWGJYUXR4ZUsydGx0Rkh6SVNzRnRmSUNkaGRTQWtCOjE2NjA1OTMyNTk0OTE6MTowOnJ0OjE',
                access_token: 'TkV5aGgzbFBGSDQ4RXFfQUxZYVpZLTRYU2o5MjJpRlE1WVlwcjVja2NMb3BaOjE2NjA1OTMyNTk0OTE6MTowOmF0OjE',
                expires_at: 1660600458,
                token_type: 'bearer',
                scope: 'users.read tweet.read offline.access',

            },
        ]
    })
};
