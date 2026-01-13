import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SectionDivider from "./SectionDivider";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"95vh"}
      backgroundImage={"url(/images/solar-images/hero-banner.png)"}
      backgroundSize={"cover"}
      backgroundPosition={"center top"}
      backgroundRepeat={"no-repeat"}
      position={"relative"}
    >
      {/* Pure visual hero banner - all information is on the image itself */}
      <SectionDivider
        variant="modern"
        position="bottom"
        color="#f7fafc"
        height="72px"
        zIndex={2}
      />
    </Flex>
  );
}
