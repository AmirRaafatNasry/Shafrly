import { Cipher, CipherCategory } from "../../cipher";

export const starCipher: Cipher = {
  id: "star",
  name: "نجمة",
  category: CipherCategory.symbol,
  image: "/images/نجمة.svg",
  features: {
    shiftableKey: { factor: 7 },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "▲1", "▲2", "▲3", "▲4", "▲5", "▲6", "▲7",
    "▶1", "▶2", "▶3", "▶4", "▶5", "▶6", "▶7",
    "▼1", "▼2", "▼3", "▼4", "▼5", "▼6", "▼7",
    "◀1", "◀2", "◀3", "◀4", "◀5", "◀6", "◀7"
  ],
};
