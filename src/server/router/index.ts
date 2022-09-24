// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { getArkyCollectionsRouter } from "./getArkyCollections";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("getArky.", getArkyCollectionsRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
