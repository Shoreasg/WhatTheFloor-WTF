import type { NextPage } from "next";
import Header from "../components/Header";
import MyHead from "../components/MyHead";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <MyHead/>
      <Header/>
    </>
  );
};

export default Home;


