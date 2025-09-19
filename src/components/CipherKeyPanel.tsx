import { Accordion, Box, Flex, SimpleGrid, Text,  useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Cipher } from "../cipher/cipher";
import { ARABIC_LETTERS } from "../cipher/constants";
import { encode } from "../cipher/encode";
type CipherKeyPanelProps = {
  cipherKey: number;
  cipher: Cipher | null;
};

type CipherCharBoxProps = {
  char: string;
  cipher: Cipher | null;
  cipherKey: number;
};

const getGridData = (columns: number) => {
  const rows = Math.ceil(ARABIC_LETTERS.length / columns);
  return Array.from({ length: columns }, (_, i) =>
    ARABIC_LETTERS.slice(i * rows, (i + 1) * rows)
  );
};

const CipherCharBox = ({ char, cipher, cipherKey }: CipherCharBoxProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const encoded = cipher ? encode(cipher, char, "/", "-", cipherKey) : "-";

  return (
    <Box
      p="xs"
      style={{
        border: `1px solid ${
          colorScheme === "dark"
            ? "var(--mantine-color-dark-4)"
            : "var(--mantine-color-gray-3)"
        }`,
        borderRadius: theme.radius.md,
        marginBottom: 4,
      }}
      aria-label={`الحرف ${char} يساوي ${encoded}`}
    >
      <Flex justify="center" gap="xs">
        <Text>{char}</Text>
        <Text aria-hidden="true">=</Text>
        <Text style={{ fontFamily: cipher?.features?.customFont?.fontFamily }}>
          {encoded}
        </Text>
      </Flex>
    </Box>
  );
};

export const CipherKeyPanel = ({ cipherKey, cipher }: CipherKeyPanelProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const isLg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
  const isSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const columns = isLg ? 4 : isSm ? 2 : 1;

  return (
    <Accordion
      disableChevronRotation
      value={opened ? "cipher-key" : null}
      onChange={() => setOpened((o) => !o)}
      chevron={opened ? <Minus /> : <Plus />}
    >
      <Accordion.Item value="cipher-key">
        <Accordion.Control aria-label="معلومات عن الشفرة">
          معلومات عن الشفرة
        </Accordion.Control>
        {opened && (
          <Accordion.Panel>
            <Box pt="sm" px={0}>
              <SimpleGrid cols={columns}>
                {getGridData(columns).map((col, i) => (
                  <Box key={i}>
                    {col.map((char, j) => (
                      <CipherCharBox
                        key={`${i}-${j}`}
                        char={char}
                        cipher={cipher}
                        cipherKey={cipherKey}
                      />
                    ))}
                  </Box>
                ))}
              </SimpleGrid>
              {cipher?.image && (
                <Box mt="md" style={{ textAlign: "center" }}>
                  <img
                    src={cipher.image}
                    alt={`تصور لشفرة ${cipher.name}`}
                    style={{ maxWidth: "50%", maxHeight: "50%" }}
                  />
                </Box>
              )}
            </Box>
          </Accordion.Panel>
        )}
      </Accordion.Item>
    </Accordion>
  );
};