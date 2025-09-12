import { Cipher, CipherCategory } from "../../cipher";

export const semaphoreCipher: Cipher = {
  id: "semaphore",
  name: "سيمافور أعلام",
  category: CipherCategory.symbol,
  features: {
    customFont: { fontFamily: "Semaphore" },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2"
  ],
};
