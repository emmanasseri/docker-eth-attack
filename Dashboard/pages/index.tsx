import { Box, Center } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Blockchain } from "../components";


const Home: NextPage = () => {
  const [nodes, setNodes] = useState([
    " ",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [blocknumber, setBlocknumber] = useState([]);

  return (
    <div>
      <Head>
        <title>Ethereum Attack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box sx={{ padding: 15 }}>
          <Center>
            {/* Chain Animation with hashes and nodes as props */}
            <Blockchain />
          </Center>
        </Box>
      </main>
    </div>
  );
};

export default Home;
