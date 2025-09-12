import { Cipher, CipherCategory } from "../../cipher";

export const dominosCipher: Cipher = {
  id: "dominos",
  name: "دومينو",
  category: CipherCategory.symbol,
  features: {
    customFont: { fontFamily: "Dominos" },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2"
  ],
};
