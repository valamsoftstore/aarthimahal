import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ta" | "en";

const dict = {
  en: {
    brandSub: "Heritage · Sivakasi",
    navHome: "Home",
    navGallery: "Gallery",
    navPackages: "Packages",
    navBook: "Book",
    navEnquire: "Enquire",
    navVisit: "Visit",
    heroKicker: "Heritage marriage house",
    heroTitle: "A hall of gold,",
    heroEm: "a wedding of light.",
    heroLead:
      "Aarthi Mahal is a Tamil marriage house in Sivakasi — halls, mandapam and feast, ready for your kalyanam.",
    reserve: "Reserve a date",
    walkHalls: "Walk the halls",
    dayKicker: "The day",
    dayTitle: "A procession, not a programme",
    houseKicker: "The house",
    houseTitle: "Built like a palace. Hosted like a home.",
    houseP1:
      "At Enjar Cross, near Good Shepherd School, the estate opens with a kolam court and a carved doorway. Inside: teak, brass lamps, silent cooling, and an aisle for nadaswaram.",
    houseP2:
      "Families come for muhurtham light, the hush of the mandapam, and a kitchen that still understands banana leaf, payasam, filter coffee — and no hurry.",
    statSpaces: "Ceremonial spaces",
    statGuests: "Guests at once",
    statRooms: "Family rooms",
    storyCap: "Devi Mandapam · east-facing rites",
    spacesKicker: "Spaces",
    spacesTitle: "Choose the room for your rite",
    careKicker: "Care",
    careTitle: "What the house quietly provides",
    lettersKicker: "From the families",
    lettersTitle: "Letters after the feast",
    ctaKicker: "By invitation of the house",
    ctaTitle: "Walk the estate. Hold the muhurtham.",
    ctaLead: "The desk replies the same day. Season dates do not wait.",
    enquireNow: "Enquire now",
    galKicker: "Lookbook",
    galTitle: "The house, dressed for a wedding",
    galLead: "Halls, mandapam, feast and night gardens — as families have used them.",
    fAll: "All",
    fHalls: "Halls",
    fMandapam: "Mandapam",
    fCuisine: "Cuisine",
    fCelebrations: "Celebrations",
    packKicker: "Offerings",
    packTitle: "Packages composed like a rite",
    packLead: "Priest, décor and menu are chosen with you — a Tamil feast, served on banana leaf.",
    enquirePlan: "Enquire this plan",
    from: "From",
    bookKicker: "Reservation",
    bookTitle: "Enquire for a muhurtham date",
    bookLead: "No payment here — only a conversation with the house.",
    inviteLine: "Together with their families",
    inviteSub: "One muhurtham · one enquiry",
    name: "Full name",
    namePh: "As on the invitation",
    mobile: "Mobile",
    email: "Email",
    optional: "Optional",
    date: "Preferred date",
    hall: "Hall",
    pack: "Package",
    guests: "Expected guests",
    notes: "Notes for the house",
    notesPh: "Rites, menu, rooms, nadaswaram, sadhya…",
    guideUs: "Guide us",
    openAdvice: "Open to advice",
    send: "Send enquiry",
    received: "Received",
    receivedTitle: "Your date is with the desk.",
    thanks: "Thank you",
    weCall: "We will call you within a few hours.",
    another: "Send another enquiry",
    visitTitle: "Come walk the corridor",
    visitLead: "The desk is open every day. Morning light is kinder for a site visit.",
    address: "Address",
    desk: "Desk",
    callHouse: "Call the house",
    hours: "Open daily · 8:00 AM – 10:00 PM",
    addr: "Enjar Cross, near Good Shepherd CBSE School, Sivakasi, Injar, Tamil Nadu 626124",
    footerCopy: "A heritage hall in Sivakasi — Tamil rites, and the long feast after.",
    visit: "Visit",
    book: "Book",
    legal: "All celebrations reserved.",
    enquiring: "You are enquiring for",
  },
  ta: {
    brandSub: "பாரம்பரியம் · சிவகாசி",
    navHome: "முகப்பு",
    navGallery: "காட்சி",
    navPackages: "தொகுப்பு",
    navBook: "முன்பதிவு",
    navEnquire: "கேள்வி",
    navVisit: "வருகை",
    heroKicker: "தமிழ்நாடு · சிவகாசி",
    heroTitle: "பொன் மண்டபம்,",
    heroEm: "ஒளிரும் கல்யாணம்.",
    heroLead:
      "வளம் மஹால் — தமிழ்க் கல்யாணமும் கேரள அன்பும் சேர்ந்த திருமண இல்லம். தேக்கு, பித்தளை விளக்கு, வாழை இலை, காலை நோக்கிய மண்டபம்.",
    reserve: "நாள் முன்பதிவு",
    walkHalls: "அரங்கம் காண",
    dayKicker: "நாள்",
    dayTitle: "நிரல் அல்ல; ஊர்வலம்",
    houseKicker: "இல்லம்",
    houseTitle: "அரண்மனை போல் கட்டி, வீடு போல் உபசரிப்பு.",
    houseP1:
      "கோயில் வீதிக் கோல வாசலும் கேரளச் செதுக்கு வாசலும் திறக்கும். உள்ளே தேக்கு, நிலாவிளக்கு, அமைதியான குளிர்ச்சி, நாதஸ்வரத்துக்கு நீளும் பாதை.",
    houseP2:
      "முகூர்த்த ஒளி, மண்டப அமைதி, வாழை இலை, பாயாசம், ஃபில்டர் காபி — அவசரமில்லாத சமையல் இன்னும் இங்கே உண்டு.",
    statSpaces: "சடங்கு அரங்குகள்",
    statGuests: "ஒரே நேர விருந்தினர்",
    statRooms: "குடும்ப அறைகள்",
    storyCap: "தேவி மண்டபம் · கிழக்கு முக சடங்கு",
    spacesKicker: "அரங்குகள்",
    spacesTitle: "உங்கள் சடங்குக்குரிய அரங்கம்",
    careKicker: "பராமரிப்பு",
    careTitle: "இல்லம் அமைதியாய் தருவது",
    lettersKicker: "குடும்பங்கள்",
    lettersTitle: "விருந்துக்குப் பின் கடிதங்கள்",
    ctaKicker: "இல்லத்தின் அழைப்பு",
    ctaTitle: "வந்து பாருங்கள். முகூர்த்தம் பிடியுங்கள்.",
    ctaLead: "அன்றே பதில். பருவ நாட்கள் காத்திருக்காது.",
    enquireNow: "இப்போது கேளுங்கள்",
    galKicker: "காட்சியகம்",
    galTitle: "கல்யாணத்துக்கு அணிந்த இல்லம்",
    galLead: "அரங்கு, மண்டபம், விருந்து, இரவுத் தோட்டம் — குடும்பங்கள் பயன்படுத்தியபடி.",
    fAll: "அனைத்தும்",
    fHalls: "அரங்குகள்",
    fMandapam: "மண்டபம்",
    fCuisine: "உணவு",
    fCelebrations: "விழா",
    packKicker: "அளிப்புகள்",
    packTitle: "சடங்கு போல் அமைந்த தொகுப்புகள்",
    packLead: "புரோகிதர், அலங்காரம், தமிழ் விருந்து அல்லது கேரள சத்யா — உங்களுடன் தேர்வு.",
    enquirePlan: "இந்தத் திட்டம்",
    from: "தொடக்கம்",
    bookKicker: "முன்பதிவு",
    bookTitle: "முகூர்த்த நாளுக்கான கேள்வி",
    bookLead: "இங்கு பணம் இல்லை — இல்லத்துடன் ஒரு உரையாடல் மட்டுமே.",
    inviteLine: "குடும்பங்களுடன்",
    inviteSub: "ஒரு முகூர்த்தம் · ஒரு கேள்வி",
    name: "முழுப் பெயர்",
    namePh: "அழைப்பிதழில் உள்ளபடி",
    mobile: "அலைபேசி",
    email: "மின்னஞ்சல்",
    optional: "விருப்பம்",
    date: "விருப்ப நாள்",
    hall: "அரங்கம்",
    pack: "தொகுப்பு",
    guests: "எதிர்பார்க்கும் விருந்தினர்",
    notes: "குறிப்பு",
    notesPh: "சடங்கு, உணவு, அறை, நாதஸ்வரம், சத்யா…",
    guideUs: "வழிகாட்டுங்கள்",
    openAdvice: "ஆலோசனை வேண்டும்",
    send: "கேள்வி அனுப்பு",
    received: "கிடைத்தது",
    receivedTitle: "உங்கள் நாள் மேசையில் உள்ளது.",
    thanks: "நன்றி",
    weCall: "சில மணி நேரத்தில் அழைப்போம்.",
    another: "மீண்டும் அனுப்பு",
    visitTitle: "தாழ்வாரத்தில் நடந்து வாருங்கள்",
    visitLead: "தினமும் திறந்திருக்கும். காலை ஒளியில் வருகை இனிது.",
    address: "முகவரி",
    desk: "மேசை",
    callHouse: "இல்லத்தை அழை",
    hours: "தினமும் · காலை 8:00 – இரவு 10:00",
    addr: "எஞ்சார் கிராஸ், குட் ஷெப்பர்ட் CBSE பள்ளி அருகில், சிவகாசி, இஞ்சார், தமிழ்நாடு 626124",
    footerCopy: "சிவகாசி பாரம்பரிய மஹால் — தமிழ்ச் சடங்கு, நீண்ட விருந்து.",
    visit: "வருகை",
    book: "முன்பதிவு",
    legal: "அனைத்து விழாக்களும் காக்கப்படும்.",
    enquiring: "நீங்கள் கேட்பது",
  },
} as const;

type Dict = { [K in keyof (typeof dict)["en"]]: string };

const hallsTa: Record<string, { name: string; blurb: string; capacity: string; area: string; tags: string[] }> = {
  "raja-sabha": {
    name: "ராஜ சபை",
    blurb: "தூண் வரிசை, பொன் விளிம்பு, ஊர்வலப் பாதை — முகூர்த்தம், வரவேற்பு, விருந்துக்குரிய பெரும் அரங்கம்.",
    capacity: "1,200 விருந்தினர்",
    area: "18,000 ச.அடி",
    tags: ["குளிர்ச்சி", "மேடை", "LED"],
  },
  "devi-mandapam": {
    name: "தேவி மண்டபம்",
    blurb: "வேதச் சடங்குக்குரிய அமைதி — பித்தளை விளக்கு, பட்டுத் திரை, கிழக்கு நோக்கிய மண்டபம்.",
    capacity: "400 விருந்தினர்",
    area: "6,400 ச.அடி",
    tags: ["பாரம்பரியம்", "பூஜை", "ஏசி"],
  },
  "chandra-garden": {
    name: "சந்திர தோட்டம்",
    blurb: "கோயில் மர நிழல், நிலா வெளிச்சம் — சங்கீதம், வெளி விருந்து, நீர் முற்றம்.",
    capacity: "800 விருந்தினர்",
    area: "திறந்த புல்வெளி",
    tags: ["தோட்டம்", "விளக்கு", "வாலட்"],
  },
};

const packTa: Record<string, { tier: string; guests: string; includes: string[] }> = {
  muhurtham: {
    tier: "அடிப்படை",
    guests: "400 வரை",
    includes: ["8 மணி நேர அரங்கம்", "பட்டு-மல்லிகை மண்டப அலங்காரம்", "மணப்பெண் அறை", "மேடை விளக்கு", "வாகன நிறுத்தம்"],
  },
  kalyanam: {
    tier: "சிறப்பு",
    guests: "800 வரை",
    includes: ["முழு நாள் அரங்கம் + தோட்டம்", "மலர் அலங்காரம்", "சைவ விருந்து / சத்யா", "ஒலி, LED", "4 அறைகள் + வாலட்", "புரோகிதர் மேசை"],
  },
  "raja-yoga": {
    tier: "அரச",
    guests: "1,200 வரை",
    includes: ["முழு இல்லம், இரு நாள்", "சிறப்பு அலங்காரம்", "பல உணவுக் கவுண்டர்கள்", "புகைப்படம்", "12 அறைகள்", "நாதஸ்வரம்"],
  },
};

const amenTa = [
  { title: "குளிர் அரங்குகள்", copy: "சபை மற்றும் மண்டபத்தில் அமைதியான குளிர்ச்சி." },
  { title: "மண அறைகள்", copy: "இரண்டு அலங்கார அறைகள் — கண்ணாடி, ஓய்வு." },
  { title: "சமையல்", copy: "தமிழ், கேரள சத்யா, ஆந்திரா, வட இந்திய கவுண்டர்கள்." },
  { title: "மின் · நீர்", copy: "தனி ஜெனரேட்டர், கோயில் கிணற்று நீர்." },
  { title: "விருந்தினர் அறை", copy: "இரவு தங்க 12 ஏசி அறைகள்." },
  { title: "வாகனம்", copy: "200 கார், இருசக்கர இடம், போக்குவரத்து." },
  { title: "மேடை", copy: "LED சுவர், விளக்கு, நாதஸ்வர மேடை." },
  { title: "உபசரிப்பு", copy: "புரோகிதர், அலங்காரம், விருந்தினர் ஒருங்கிணைப்பு." },
];

const riteTa = [
  { copy: "பட்டு விதானத்தில் வாக்கு." },
  { copy: "கிழக்கு ஒளி. அக்னி. கணே." },
  { copy: "பாதை மூச்சு விடும்." },
  { copy: "வாழை இலை. அவசரமில்லை." },
];

const quoteTa = [
  { quote: "ஜோதிடர் சொன்னபடியே காலை ஒளி மண்டபத்தைத் தொட்டது. மல்லிகையும் அமைதியும் இன்னும் பேசுகிறார்கள்.", place: "தஞ்சாவூர் · ஜனவரி 2026" },
  { quote: "900 பேர் வரவேற்பு. சேவை குறையவில்லை. தோட்ட விளக்கு சினிமா. பெரியவர்களுக்கு ஓய்வறை தேட வேண்டியதில்லை.", place: "சென்னை · டிசம்பர் 2025" },
  { quote: "வளம் அரண்மனை போல் — ஆனால் இறுக்கம் இல்லை. பொன், மரம், தமிழ்க் கல்யாணம் தெரிந்த மக்கள்.", place: "கும்பகோணம் · மார்ச் 2026" },
];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    localStorage.setItem("valam-lang", lang);
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dict[lang] }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang");
  return ctx;
}

export function hallCopy(id: string, lang: Lang, fallback: { name: string; tamil: string; blurb: string; capacity: string; area: string; tags: string[] }) {
  if (lang === "ta" && hallsTa[id]) return hallsTa[id];
  return {
    name: fallback.name,
    blurb: fallback.blurb,
    capacity: fallback.capacity,
    area: fallback.area,
    tags: fallback.tags,
  };
}

export function packCopy(id: string, lang: Lang, fallback: { tier: string; guests: string; includes: string[] }) {
  if (lang === "ta" && packTa[id]) return packTa[id];
  return fallback;
}

export function amenCopy(lang: Lang, i: number, fallback: { title: string; copy: string }) {
  return lang === "ta" ? amenTa[i] ?? fallback : fallback;
}

export function riteCopy(lang: Lang, i: number, fallback: string) {
  return lang === "ta" ? riteTa[i]?.copy ?? fallback : fallback;
}

export function quoteCopy(lang: Lang, i: number, fallback: { quote: string; place: string }) {
  return lang === "ta" ? quoteTa[i] ?? fallback : fallback;
}
