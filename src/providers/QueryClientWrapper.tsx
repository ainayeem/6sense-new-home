"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient();

const QueryClientWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryClientWrapper;
