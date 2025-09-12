import { Cipher, CipherCategory } from "../../cipher";
import { WaveFile } from "wavefile";

export const morseCipher: Cipher = {
  id: "morse",
  name: "مورس",
  category: CipherCategory.symbol,
  features: {
    reversible: false,
    audible: {
      toAudioBlob: (
        encodedText: string,
        letterSeparator: string,
        wordSeparator: string,
        speed: number
      ): Blob => {
        const tokens = tokenize(encodedText, letterSeparator, wordSeparator);
        return generateMorseWavAudio(tokens, speed);
      },
    },
  },
  // prettier-ignore
  symbols: [
    "(•-)", "(-•••)", "(-)", "(-•-•)", "(•---)", "(••••)", "(---)",
    "(-••)", "(--••)", "(•-•)", "(---•)", "(•••)", "(----)", "(-••-)",
    "(•••-)", "(••-)", "(-•--)", "(•-•-)", "(--•)", "(••-•)", "(--•-)",
    "(-•-)", "(•-••)", "(--)", "(-•)", "(••-••)", "(•--)", "(••)"
  ],
};

type MorseToken = "." | " ";

// Map encoded characters to tokens ("." or " "):
// 1. The duration of a dash is three times the duration of a dot.
// 2. Each dot or dash within a character is followed by period of signal absence,
//    called a space, equal to the dot duration.
// 3. Letters are separated by a space of duration equal to three dots.
// 4. Words are separated by a space of duration equal to seven dots.
//
// The output will be something like the following,
// where each "." should be replaced with a sine wave and each " " with silence:
// ['.', ' ', '.', ' ', ' ']
function tokenize(
  encodedText: string,
  letterSeparator: string,
  wordSeparator: string
): MorseToken[] {
  return encodedText
    .replace(/\r\n/g, " ".repeat(10))
    .replace(new RegExp(wordSeparator, "g"), " ".repeat(7))
    .replace(new RegExp(letterSeparator, "g"), " ".repeat(3))
    .replace(new RegExp("•", "g"), ". ")
    .replace(new RegExp("-", "g"), "... ")
    .split("") as MorseToken[];
}

function generateMorseWavAudio(tokens: MorseToken[], speed: number) {
  const samplesRate = 44100;
  const frequency = 750;
  const amplitude = 32760;

  const period = (2 * Math.PI * frequency) / samplesRate;
  const size = Math.floor(((3 - (speed - 1)) * samplesRate) / 10);
  const sineWave = generateSineWave(size, amplitude, period);
  const flatWave = generateFlatWave(size);

  const wavFile = new WaveFile();
  const data = tokens.flatMap((token) => (token === "." ? sineWave : flatWave));

  wavFile.fromScratch(1, samplesRate, "16", data);

  return new Blob([wavFile.toBuffer()], { type: "audio/wav" });
}

function generateSineWave(size: number, amplitude: number, period: number) {
  return Array.from({ length: size }, (_, i) =>
    Math.round(amplitude * Math.sin(i * period))
  );
}

function generateFlatWave(size: number) {
  return Array(size).fill(0);
}
