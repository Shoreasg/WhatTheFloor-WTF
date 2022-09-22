import type { NextPage } from "next";
import Body from "../components/Layout/Body";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <Body>
      <h1>hello</h1>
    </Body>
  );
};

export default Home;


