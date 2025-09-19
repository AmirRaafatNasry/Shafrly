import { Cipher, CipherCategory } from "../../cipher";

export const mobileCipher: Cipher = {
  id: "mobile",
  name: "جوال",
  image: "/images/جوال.svg",
  category: CipherCategory.number,
  // prettier-ignore
  symbols: [
    "3", "2", "22", "222",
    "6", "66", "666",
    "5", "55", "555", "5555",
    "4", "44", "444", "4444",
    "9", "99", "999", "9999",
    "8", "88", "888", "8888", "88888",
    "7", "77", "777", "7777"
  ],
};
