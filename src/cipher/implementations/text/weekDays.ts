import { Cipher, CipherCategory } from "../../cipher";

export const weekDaysCipher: Cipher = {
  id: "weekDays",
  name: "أيام الأسبوع",
  category: CipherCategory.text,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "الأحد1", "الأحد2", "الأحد3", "الأحد4",
    "الاثنين1", "الاثنين2", "الاثنين3", "الاثنين4",
    "الثلاثاء1", "الثلاثاء2", "الثلاثاء3", "الثلاثاء4",
    "الأربعاء1", "الأربعاء2", "الأربعاء3", "الأربعاء4",
    "الخميس1", "الخميس2", "الخميس3", "الخميس4",
    "الجمعة1", "الجمعة2", "الجمعة3", "الجمعة4",
    "السبت1", "السبت2", "السبت3", "السبت4",
  ],
};
