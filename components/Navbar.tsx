import React from "react";
import Image from "next/image";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import { Box, Container, Flex } from "@chakra-ui/react";

type Props = {};

const Navbar = (props: Props) => {
  const address = useAddress();
  return (
    <Box sx={{ bgColor: "#000002", position: "fixed", width: "100%" }}>
      <Container color="#fff" maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src="/logo.svg" alt="" width={70} height={100} />
          <Box
            sx={{ cursor: "pointer", display: { base: "none", sm: "flex" } }}
          >
            Explore
          </Box>
          <Box
            sx={{ cursor: "pointer", display: { base: "none", sm: "flex" } }}
          >
            {" "}
            Create
          </Box>
          <Box
            sx={{ cursor: "pointer", display: { base: "none", sm: "flex" } }}
          >
            MyPurchases
          </Box>
          <Box>
            <ConnectWallet />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
