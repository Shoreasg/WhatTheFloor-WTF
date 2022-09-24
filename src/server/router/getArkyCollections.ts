import { createRouter } from "./context";
import { env } from "../../env/server.mjs";
const { toBech32Address } = require('@zilliqa-js/crypto');
import axios from 'axios';

export const getArkyCollectionsRouter = createRouter()
    .query("mapArkyCollections", {
        async resolve({ ctx }) {
            const { data } = await axios.get(env.ARKY_URL);
            // console.log(data.result.entries);
            const mapData = data.result.entries.map(async(data: any) => {
              await ctx.prisma.arkyCollections.createMany(
                    {
                        data:[
                            {   collectionsName: data.name,
                                description: (data.description? data.description: "NA"),
                                tokenAddress: toBech32Address(data.address),
                                websiteUrl: (data.websiteUrl? data.websiteUrl: "NA"),
                                discordUrl: (data.discordUrl? data.discordUrl : "NA"),
                                telegramUrl: (data.telegramUrl? data.telegramUrl : "NA"),
                                twitterUrl: (data.twitterUrl? data.twitterUrl: "NA"),
                                instagramUrl: (data.instagramUrl? data.instagramUrl: "NA"),
                                profileImageUrl: (data.profileImageUrl? data.profileImageUrl : "NA"),
                                floorPrice: data.priceStat.floorPrice,
                                allTimeVolume: data.priceStat.allTimeVolume,
                                totalToken: data.tokenStat.tokenCount,
                                numHolders: data.tokenStat.holderCount,
                                isVerified: (data.verifiedAt ? true: false),
                                isScam: (data.reportLevel === 1? true : false),
                                marketCap: "0",
                                volume: data.priceStat.allTimeVolume
                                
                            }
                        ]

                    }
                )
            })

            return {success: true};
        },
    })
    .query("getAllCollections", {
        async resolve({ ctx }) {
            return await ctx.prisma.arkyCollections.findMany();
        },
    });
