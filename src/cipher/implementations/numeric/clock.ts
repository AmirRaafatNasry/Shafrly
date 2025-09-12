import { Cipher, CipherCategory } from "../../cipher";

export const clockCipher: Cipher = {
  id: "clock",
  name: "ساعة",
  category: CipherCategory.number,
  features: {
    shiftableKey: { factor: 1 },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "12:1", "1:1", "2:1", "3:1", "4:1", "5:1", "6:1",
    "7:1", "8:1", "9:1", "10:1", "11:1", "12:2", "1:2",
    "2:2", "3:2", "4:2", "5:2", "6:2", "7:2", "8:2",
    "9:2", "10:2", "11:2", "12:3", "1:3", "2:3", "3:3",
  ],
};
