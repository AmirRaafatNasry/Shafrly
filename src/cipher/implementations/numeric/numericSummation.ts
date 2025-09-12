import { Cipher, CipherCategory } from "../../cipher";

export const numericSummationCipher: Cipher = {
  id: "numericSummation",
  name: "عشرية",
  category: CipherCategory.number,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "20", "30", "40", "50", "60", "70", "80", "90", "100",
    "200", "300", "400", "500", "600", "700", "800", "900", "1000"
  ],
};
