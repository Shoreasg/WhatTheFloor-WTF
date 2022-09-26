import { createRouter } from "./context";
import { env } from "../../env/server.mjs";
const { toBech32Address } = require('@zilliqa-js/crypto');
import axios from 'axios';

export const getArkyCollectionsRouter = createRouter()
    .query("mapArkyCollections", {
        //map new data from arky api
        async resolve({ ctx }) {
            const { data } = await axios.get(env.ARKY_URL);
            data.result.entries.map(async (data: any) => {
                await ctx.prisma.arkyCollections.createMany(
                    {
                    
                        data: [
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

                            }
                        ]

                    }
                )
            })

            return { success: true };
        },
    }).query("updateArkyCollections", {
        // update existing data in db everytime someone access the page
        async resolve({ ctx }) {
            const { data } = await axios.get(env.ARKY_URL);
            data.result.entries.map(async (data: any) => {
                await ctx.prisma.arkyCollections.upsert(
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
            return { success: true };
        },
    })
    .query("getAllCollections", {
        //get all collections
        async resolve({ ctx }) {
            const result = await ctx.prisma.arkyCollections.findMany({
                where: {
                    collectionsName: {
                        not: "To Remove",
                    },
                },
            });
            return result;
        },
    });
