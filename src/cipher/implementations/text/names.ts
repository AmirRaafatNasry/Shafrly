import { Cipher, CipherCategory } from "../../cipher";

export const namesCipher: Cipher = {
  id: "names",
  name: "أسماء",
  category: CipherCategory.text,
  // prettier-ignore
  symbols: [
    "ايفغيني", "باتراش", "تيفادار", "ثيوفيلوس", "جينريش", "حيرام", "خوارزم",
    "ديمتري", "ذاخر", "ريموند", "زوريس", "سيمين", "شارلس", "صالح",
    "ضرار", "طيب", "ظاهر", "عمار", "غولييلمو", "فيودور", "قيصر",
    "كلارنس", "ليونتي", "موراساكي", "نيلس", "هيلج", "ويلارد", "يافيم"
  ],
};
