import type { NextPage } from "next";
import CarouselBanner from "../components/CarouselBanner";
import Body from "../components/Layout/Body";
import Table from "../components/Table";
import { trpc } from "../utils/trpc";



const Home: NextPage = () => {
  // trpc.useQuery(["getArky.updateArkyCollections"],{staleTime: 3600000});
  const arkyCollections = trpc.useQuery(["getArky.getAllCollections"]);

  const sortArkyCollections = arkyCollections.data?.sort((b: any, a: any) => {
    return a.allTimeVolume - b.allTimeVolume
  })


  return (
    <Body>
      <CarouselBanner />
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-5xl sm:tracking-tight">
          NFT Collections
        </h2>
      </div>
      {arkyCollections.isLoading ? <Table /> : <Table arkyCollections={sortArkyCollections} />}

    </Body>
  );
};

export default Home;


