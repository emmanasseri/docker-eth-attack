import { useEffect, useState } from 'react';
import {Group, Text, Box, DefaultMantineColor, MantineSize  } from '@mantine/core';
import NextButton from './NextButton';
import type { FC } from "react";
import { BlockHeader } from "web3-eth";

interface propTypes {
    data: BlockHeader;
  }

export const NodeDataDisplay: FC<any> = (props: propTypes) => {
    const style = {
        margin: 30
    }
    return(
        <div style={style}>
            <Text size="md" color="000000" weight="bold">Miner name</Text>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 390,
                    height: 150,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: "#000000",
                    borderStyle: "solid",
                    backgroundColor: "#d1efdf",
                    boxShadow:
                    "0 1px 3px rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                    }}
            >
            {<Text size="lg" color="000000" weight="bold">where the data will go</Text>}
            </Box>
        </div>
    );
}