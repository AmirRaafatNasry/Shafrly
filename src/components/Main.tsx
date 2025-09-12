import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { Check, Copy, Download, Volume2 } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { CipherCategory } from "../cipher/cipher";
import { ARABIC_LETTERS, CIPHERS } from "../cipher/constants";
import { encode } from "../cipher/encode";
import { FileService } from "../services/FileService";
import { AudioDialog } from "./AudioDialog";
import { CipherKeyPanel } from "./CipherKeyPanel";
import { DownloadDialog } from "./DownloadDialog";
import { TextArea } from "./TextArea";

export const Main: React.FC = () => {
  const DEFAULT_INITIAL_INDEX = 3;

  const [category, setCategory] = useState<CipherCategory>(
    CIPHERS[DEFAULT_INITIAL_INDEX]?.category ?? CipherCategory.number
  );

  const categoryCiphers = CIPHERS.filter((c) => c.category === category);

  const getInitialCipher = () =>
    CIPHERS[DEFAULT_INITIAL_INDEX] ?? categoryCiphers[0] ?? CIPHERS[0];

  const [cipher, setCipher] = useState(() => getInitialCipher());
  const [key, setKey] = useState(0);
  const [letterSeparator, setLetterSeparator] = useState(" - ");
  const [wordSeparator, setWordSeparator] = useState("  /  ");
  const [reversed, setReversed] = useState(false);
  const { copied, copy } = useClipboard();
  const [downloadDialogOpened, downloadDialog] = useDisclosure();
  const [audioDialogOpened, audioDialog] = useDisclosure();
  const [inputText, setInputText] = useState(
    "أمير رأفت مستعيناً بالذكاء الاصطناعي عام 2025: التشفير هو اللغة ما بين السطور."
  );
  const outputText = encode(
    cipher,
    inputText,
    wordSeparator,
    letterSeparator,
    key
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (categoryCiphers.length > 0) {
      if (category !== CIPHERS[DEFAULT_INITIAL_INDEX]?.category) {
        setCipher(categoryCiphers[0]);
      }
    }
  }, [category]);

  useEffect(() => {
    setKey(0);
  }, [cipher]);

  return (
    <Container size="lg" py="xl" px="md">
      <Stack gap="lg" align="stretch">
        <SimpleGrid cols={{ sm: 1, md: 3, lg: 6 }}>
          <Select
            label="مجموعة"
            placeholder="اختر مجموعة"
            value={category}
            onChange={(v) => setCategory(v as CipherCategory)}
            data={Object.values(CipherCategory).map((type) => ({
              value: type,
              label: type,
            }))}
          />
          <Select
            label="شفرة"
            placeholder="اختر شفرة"
            value={cipher.id}
            onChange={(v) => {
              const selected = categoryCiphers.find((c) => c.id === v);
              if (selected) setCipher(selected);
            }}
            data={categoryCiphers.map((c) => ({
              value: c.id,
              label: c.name,
            }))}
          />
          <Select
            disabled={!cipher.features?.shiftableKey}
            label="مفتاح"
            placeholder="اختر مفتاح"
            value={key.toString()}
            onChange={(v) => setKey(Number(v || 0))}
            data={ARABIC_LETTERS.map((_, idx) => ({
              value: idx.toString(),
              label: `ا = ${cipher.symbols?.[idx] ?? ""}`,
            }))}
            styles={{
              input: { fontFamily: cipher?.features?.customFont?.fontFamily },
            }}
          />
        </SimpleGrid>

        <Divider />

        <SimpleGrid cols={{ sm: 1, md: 3, lg: 6 }}>
          <TextInput
            label="فاصل الحروف"
            placeholder="فاصل الحروف"
            value={letterSeparator}
            onChange={(e) => setLetterSeparator(e.target.value)}
          />
          <TextInput
            label="فاصل الكلمات"
            placeholder="فاصل الكلمات"
            value={wordSeparator}
            onChange={(e) => setWordSeparator(e.target.value)}
          />
          <Select
            disabled={cipher.features?.reversible === false}
            label="اتجاه الكلام"
            placeholder="اتجاه الكلام"
            value={reversed ? "reversed" : "normal"}
            onChange={(v) => setReversed(v === "reversed")}
            data={[
              { value: "normal", label: "عادي" },
              { value: "reversed", label: "معكوس" },
            ]}
          />
        </SimpleGrid>

        <Divider />

        <CipherKeyPanel cipherKey={key} cipher={cipher} />
        <Stack gap="lg" align="stretch">
          <TextArea
            aria-label="اكتب النص هنا"
            placeholder="اكتب النص هنا"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            bottomSection={
              <Group justify="flex-end">
                <Text size="xs" c="dimmed" px="4">
                  {inputText.trim() ? inputText.trim().split(/\s+/).length : 0}
                </Text>
              </Group>
            }
          />
          <TextArea
            readOnly
            aria-label="النص المشفر"
            value={
              reversed ? outputText.split("").reverse().join("") : outputText
            }
            styles={{
              input: { fontFamily: cipher?.features?.customFont?.fontFamily },
            }}
            bottomSection={
              outputText && (
                <Group justify="flex-end" gap={0}>
                  {cipher.features?.audible && (
                    <ActionIcon onClick={audioDialog.open}>
                      <Volume2 size={16} />
                    </ActionIcon>
                  )}
                  <ActionIcon
                    onClick={() =>
                      reversed
                        ? copy(outputText)
                        : copy("\u202B" + outputText + "\u202C")
                    }
                    disabled={!!cipher.features?.customFont?.fontFamily}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </ActionIcon>
                  <ActionIcon onClick={downloadDialog.open}>
                    <Download size={16} />
                  </ActionIcon>
                </Group>
              )
            }
          />
        </Stack>

        <DownloadDialog
          opened={downloadDialogOpened}
          close={downloadDialog.close}
          currentCipher={`شفرة ${cipher.name}`}
          onDownload={(filename) => {
            FileService.downloadAsText(filename, {
              original: inputText,
              encoded: outputText,
              cipher: cipher.name || "",
              key: key.toString(),
              timestamp: Date.now(),
            });
          }}
        />

        <AudioDialog
          opened={audioDialogOpened}
          close={audioDialog.close}
          onDownload={(filename, speed) => {
            const blob = cipher.features!.audible!.toAudioBlob(
              outputText,
              letterSeparator,
              wordSeparator,
              speed
            );
            FileService.downloadBlob(blob, `${filename}-x${speed}.wav`);
          }}
        />
      </Stack>
    </Container>
  );
};
