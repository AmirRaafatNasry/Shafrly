import { Cipher, CipherCategory } from "../../cipher";

export const squareCipher: Cipher = {
  id: "square",
  name: "مربع",
  category: CipherCategory.symbol,
  features: {
    customFont: { fontFamily: "Square" },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "ا", "ب", "ت", "ث", "ج", "ح", "خ",
    "د", "ذ", "ر", "ز", "س", "ش", "ص",
    "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
    "ك", "ل", "م", "ن", "ه", "و", "ي"
  ],
};
