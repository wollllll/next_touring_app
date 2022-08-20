// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {prisma} from "../../../prisma";

const handler = async (request, response) => {
    const spot = await prisma.spot.create({
        data: request.body
    })

    response.status(200).json({spot});
}

export default handler
