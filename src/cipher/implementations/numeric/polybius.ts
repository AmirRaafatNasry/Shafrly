import { Cipher, CipherCategory } from "../../cipher";

export const polybiusCipher: Cipher = {
  id: "polybius",
  name: "بوليبيوس",
  category: CipherCategory.number,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "11", "12", "13", "14", "15", "16", "17",
    "21", "22", "23", "24", "25", "26", "27",
    "31", "32", "33", "34", "35", "36", "37",
    "41", "42", "43", "44", "45", "46", "47"
  ],
};
