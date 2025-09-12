import { Cipher, CipherCategory } from "../../cipher";

export const reverseCipher: Cipher = {
  id: "reverse",
  name: "عكسية",
  category: CipherCategory.text,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "ي", "و", "ه", "ن", "م", "ل", "ك", "ق", "ف", "غ", "ع", "ظ", "ط", "ض",
    "ص", "ش", "س", "ز", "ر", "ذ", "د", "خ", "ح", "ج", "ث", "ت", "ب", "ا"
  ],
};
