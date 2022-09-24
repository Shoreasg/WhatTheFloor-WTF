import type { NextPage } from "next";
import CarouselBanner from "../components/CarouselBanner";
import Body from "../components/Layout/Body";
import Table from "../components/Table";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Body>
      <CarouselBanner />
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            NFT Collections {hello.data?.greeting}
          </h2>
        </div>
      <Table />
    </Body>
  );
};

export default Home;


