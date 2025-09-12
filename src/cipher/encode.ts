import { Cipher } from "./cipher";
import { ARABIC_ALIKE_MAP, ARABIC_LETTERS } from "./constants";

export function encode(
  cipher: Cipher,
  input: string,
  wordSeparator = "/",
  letterSeparator = "-",
  key = 0
): string {
  const normalizedText = normalizeArabicText(input);

  const lines = normalizedText.split("\n");

  const encodedLines = lines.map((line) =>
    line
      .split(/\s+/)
      .filter((word) => word.trim().length > 0)
      .map((word) => encodeWord(word, cipher, letterSeparator, key))
      .join(` ${wordSeparator} `)
  );

  return encodedLines.join("\n");
}

function encodeWord(
  word: string,
  cipher: Cipher,
  letterSeparator: string,
  key: number
): string {
  const encodedChars = word.split("").map((char) => {
    const index = ARABIC_LETTERS.indexOf(char);
    return index !== -1
      ? cipher.symbols[(index + key) % cipher.symbols.length]
      : char;
  });

  const result = encodedChars.reduce((acc, current, index) => {
    const isPreviousEncoded =
      index > 0 && ARABIC_LETTERS.includes(word[index - 1]);
    const isCurrentEncoded = ARABIC_LETTERS.includes(word[index]);

    if (isPreviousEncoded && isCurrentEncoded)
      return acc + letterSeparator + current;

    return acc + current;
  }, "");

  return result;
}

function normalizeArabicText(text: string): string {
  let normalized = text;
  for (const [alike, master] of Object.entries(ARABIC_ALIKE_MAP)) {
    normalized = normalized.replace(new RegExp(alike, "g"), master);
  }
  return normalized;
}
