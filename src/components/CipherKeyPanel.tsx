import {
  Accordion,
  Box,
  Flex,
  Grid,
  GridCol,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Cipher } from "../cipher/cipher";
import { ARABIC_LETTERS } from "../cipher/constants";
import { encode } from "../cipher/encode";

interface CipherKeyPanelProps {
  cipherKey: number;
  cipher: Cipher | null;
}

export const CipherKeyPanel: React.FC<CipherKeyPanelProps> = ({
  cipherKey,
  cipher,
}) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const totalItems = ARABIC_LETTERS.length;
  const columns = 4;
  const rows = Math.ceil(totalItems / columns);
  const gridData: (string | null)[][] = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(null));

  ARABIC_LETTERS.forEach((char, index) => {
    const col = Math.floor(index / rows);
    const row = index % rows;
    if (col < columns) {
      gridData[row][col] = char;
    }
  });

  const [opened, setOpened] = useState(false);


  return (
    <Accordion
      disableChevronRotation
      value={opened ? "cipher-key" : null}
      onChange={(x) => setOpened(true)}
      chevron={opened ? <Minus /> : <Plus />}
    >
      <Accordion.Item value="cipher-key">
        <Accordion.Control>
          معلومات عن الشفرة
        </Accordion.Control>

        <Accordion.Panel>
          <Box pt="sm" px={0}>
            <Grid gutter="xs">
              {gridData.map((row, rowIndex) =>
                row.map((char, colIndex) => (
                  <GridCol
                    span={{ base: 12, sm: 6, md: 3 }}
                    key={`${rowIndex}-${colIndex}`}
                  >
                    {char && (
                      <Box
                        p="xs"
                        style={{
                          border: `1px solid ${colorScheme === "dark" ? "var(--mantine-color-dark-4)" : "var(--mantine-color-gray-3)"}`,
                          borderRadius: theme.radius.md,
                        }}
                      >
                        <Flex justify="center" gap="xs">
                          <Text>{char}</Text>
                          <Text>=</Text>
                          <Text
                            style={{
                              fontFamily:
                                cipher?.features?.customFont?.fontFamily,
                            }}
                          >
                            {cipher
                              ? encode(cipher, char, "/", "-", cipherKey)
                              : "-"}
                          </Text>
                        </Flex>
                      </Box>
                    )}
                  </GridCol>
                ))
              )}
            </Grid>
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};