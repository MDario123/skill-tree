"use client";

import type { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { GraphContextProvider } from "#shared/services/graph";

const queryClient = new QueryClient();

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GraphContextProvider>{children}</GraphContextProvider>
    </QueryClientProvider>
  );
}
