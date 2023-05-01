import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box bgColor="#000002" pt="4%" minHeight="50vh">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between">
          <Box>
            <Heading size="2xl" color="#fff">
              Create Your Own{" "}
              <span style={{ color: "#0FE9EF" }}>NFT Dream</span> Gallery
            </Heading>
          </Box>
          <Box>test</Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
