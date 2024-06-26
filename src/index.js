import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme";
import { GlobalStyled } from "./components/GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <GlobalStyled />
        <Router />
      </ChakraBaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
