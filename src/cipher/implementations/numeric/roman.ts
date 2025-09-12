import { Cipher, CipherCategory } from "../../cipher";

const romanRaw = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
  "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII",
  "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV",
  "XXV", "XXVI", "XXVII", "XXVIII"
];

export const romanCipher: Cipher = {
  id: "roman",
  name: "روماني",
  category: CipherCategory.number,
  features: {
    shiftableKey: { factor: 1 },
  },
  symbols: romanRaw.map((s) => `\u200F${s}`),
};