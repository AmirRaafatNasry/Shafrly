import { Cipher, CipherCategory } from "../../cipher";

export const caesarCipher: Cipher = {
  id: "caesar",
  name: "قيصر",
  category: CipherCategory.text,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "ب", "ت", "ث", "ج", "ح", "خ", "د",
    "ذ", "ر", "ز", "س", "ش", "ص", "ض",
    "ط", "ظ", "ع", "غ", "ف", "ق", "ك",
    "ل", "م", "ن", "ه", "و", "ي", "ا"
  ],
};
