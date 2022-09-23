import type { NextPage } from "next";
import CarouselBanner from "../components/CarouselBanner";
import Body from "../components/Layout/Body";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Body>
        <CarouselBanner />
    </Body>
  );
};

export default Home;


