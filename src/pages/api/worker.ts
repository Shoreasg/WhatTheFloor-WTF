import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
const { toBech32Address } = require('@zilliqa-js/crypto');
import { env } from "../../env/server.mjs";
import { prisma } from "../../server/db/client";



const holderCount = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(env.APIKEY)
        if(req.query.token !== env.APIKEY)
        {
            return res.status(403).json({error: "unauthorized"});

        }
        const { data } = await axios.get(env.ARKY_URL);
        data.result.entries.map(async (data: any) => {
            await prisma.arkyCollections.upsert(
                {
                    where: {
                        collectionsName: data.name,
                    },
                    update: {
                        floorPrice: data.priceStat.floorPrice,
                        allTimeVolume: data.priceStat.allTimeVolume,
                        isVerified: (data.verifiedAt ? true : false),
                        isScam: (data.reportLevel === 1 ? true : false),
                        marketCap: "0",
                        sevenDayVolume: data.priceStat.volume
                    },
                    create:
                    {
                        collectionsName: data.name,
                        description: (data.description ? data.description : "NA"),
                        tokenAddress: toBech32Address(data.address),
                        websiteUrl: (data.websiteUrl ? data.websiteUrl : "NA"),
                        discordUrl: (data.discordUrl ? data.discordUrl : "NA"),
                        telegramUrl: (data.telegramUrl ? data.telegramUrl : "NA"),
                        twitterUrl: (data.twitterUrl ? data.twitterUrl : "NA"),
                        instagramUrl: (data.instagramUrl ? data.instagramUrl : "NA"),
                        profileImageUrl: (data.profileImageUrl ? data.profileImageUrl : "NA"),
                        floorPrice: data.priceStat.floorPrice,
                        allTimeVolume: data.priceStat.allTimeVolume,
                        totalToken: data.tokenStat.tokenCount,
                        numHolders: data.tokenStat.holderCount,
                        isVerified: (data.verifiedAt ? true : false),
                        isScam: (data.reportLevel === 1 ? true : false),
                        marketCap: "0",
                        sevenDayVolume: data.priceStat.volume
                    },
                }
            )
             

        })
      
        res.status(200).json({success: true});

        
    } catch (error) {
        res.status(500).json({ error: "internal error" });
    }
  
   
  };
  
  export default holderCount;