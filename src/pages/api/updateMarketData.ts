import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
const { toBech32Address } = require('@zilliqa-js/crypto');
import { env } from "../../env/server.mjs";
import { prisma } from "../../server/db/client";
import moment from "moment";


const updateMarketData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.query.token !== env.APIKEY) {
            return res.status(403).json({ error: "unauthorized" });
        }

        const { data } = await axios.get(env.ARKY_URL);
        data.result.entries.map(async (data: any) => {


            await prisma.arkyNFTDetails.update(
                {
                    where:
                    {
                        collectionName: data.name,
                    },
                    data: {
                        marketData: {
                            push: {
                                time: moment().format(),
                                holder_count_24hr: data.tokenStat.holderCount,
                                floorPrice_24hr: data.priceStat.floorPrice,
                            }
                        }
                    }
                },

            )
        })
        res.status(200).json({ success: true });

    } catch (error) {
        res.status(500).json({ error: "internal error" });
    }
}


export default updateMarketData;