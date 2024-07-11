"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#32012f",
        color: "white",
      },
    },
  },
});

export function Providers({ children }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
