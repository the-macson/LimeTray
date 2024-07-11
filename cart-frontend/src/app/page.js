"use client";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import Cart from "@/components/Cart";

function Home() {
  return <Cart />;
}

export default Home;
