import { Cipher, CipherCategory } from "../../cipher";

export const xCipher: Cipher = {
  id: "x",
  name: "إكس",
  category: CipherCategory.symbol,
  features: {
    shiftableKey: { factor: 7 },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "˅1", "˅2", "˅3", "˅4", "˅5", "˅6", "˅7",
    "˂1", "˂2", "˂3", "˂4", "˂5", "˂6", "˂7",
    "˄1", "˄2", "˄3", "˄4", "˄5", "˄6", "˄7",
    "˃1", "˃2", "˃3", "˃4", "˃5", "˃6", "˃7"
  ],
};
