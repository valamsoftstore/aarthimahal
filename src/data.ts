export type Hall = {
  id: string;
  name: string;
  tamil: string;
  capacity: string;
  area: string;
  blurb: string;
  image: string;
  tags: string[];
};

export type Package = {
  id: string;
  name: string;
  tamil: string;
  tier: string;
  priceFrom: string;
  guests: string;
  featured?: boolean;
  includes: string[];
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "Halls" | "Mandapam" | "Cuisine" | "Celebrations";
};

export const halls: Hall[] = [
  {
    id: "raja-sabha",
    name: "Raja Sabha",
    tamil: "ராஜ சபை",
    capacity: "1,200 guests",
    area: "18,000 sq.ft",
    blurb: "A pillar-lined grand hall for muhurtham, reception and banquet — carved wood, gold cornice and a processional aisle.",
    image: "/images/tn-hero-mandap.jpg",
    tags: ["Air-cooled", "Stage", "LED"],
  },
  {
    id: "devi-mandapam",
    name: "Devi Mandapam",
    tamil: "தேவி மண்டபம்",
    capacity: "400 guests",
    area: "6,400 sq.ft",
    blurb: "An intimate sanctum for vedic rites — brass lamps, silk drapes and a raised mandapam facing east.",
    image: "/images/tn-devi-mandapam.jpg",
    tags: ["Traditional", "Pooja", "AC"],
  },
  {
    id: "chandra-garden",
    name: "Chandra Garden",
    tamil: "சந்திர தோட்டம்",
    capacity: "800 guests",
    area: "Open lawn",
    blurb: "Moonlit lawns under temple trees — evening receptions, sangeet and outdoor dining with a water-court.",
    image: "/images/kl-courtyard-garden.jpg",
    tags: ["Lawn", "Lighting", "Valet"],
  },
];

export const packages: Package[] = [
  {
    id: "muhurtham",
    name: "Muhurtham",
    tamil: "முகூர்த்தம்",
    tier: "Essential",
    priceFrom: "₹1.8 L",
    guests: "Up to 400",
    includes: [
      "Hall for 8 hours",
      "Mandapam décor in silk & jasmine",
      "Bridal suite",
      "Basic stage lighting",
      "Parking & security",
    ],
  },
  {
    id: "kalyanam",
    name: "Kalyanam",
    tamil: "கல்யாணம்",
    tier: "Signature",
    priceFrom: "₹4.6 L",
    guests: "Up to 800",
    featured: true,
    includes: [
      "Full-day hall + lawn",
      "Designer floral décor",
      "Vegetarian banquet by our kitchen",
      "Sound, LED wall & live feed",
      "Guest rooms (4) & valet",
      "Priest coordination desk",
    ],
  },
  {
    id: "raja-yoga",
    name: "Raja Yoga",
    tamil: "ராஜ யோகம்",
    tier: "Royal",
    priceFrom: "₹9.2 L",
    guests: "Up to 1,200",
    includes: [
      "Entire estate, two days",
      "Bespoke décor & floral atelier",
      "Multi-cuisine live counters",
      "Photography partnership",
      "12 guest rooms + hospitality desk",
      "Nadaswaram & reception styling",
    ],
  },
];

export const gallery: GalleryItem[] = [
  { id: "g1", src: "/images/tn-hero-mandap.jpg", alt: "Tamil Nadu gold kalyanam hall", category: "Halls" },
  { id: "g2", src: "/images/tn-devi-mandapam.jpg", alt: "East-facing mandapam with kuthuvilakku", category: "Mandapam" },
  { id: "g3", src: "/images/kl-courtyard-garden.jpg", alt: "Kerala courtyard and temple pond", category: "Celebrations" },
  { id: "g4", src: "/images/tn-kl-sadhya.jpg", alt: "Banana-leaf virundhu and sadhya", category: "Cuisine" },
  { id: "g5", src: "/images/kl-teak-sabha.jpg", alt: "Kerala teak sabha with hanging lamps", category: "Halls" },
  { id: "g6", src: "/images/tn-kl-jasmine-kolam.jpg", alt: "Jasmine, banana stem and pookalam", category: "Mandapam" },
  { id: "g7", src: "/images/tn-ponnu-mapillai-aisle.jpg", alt: "Tamil ponnu and mapillai in traditional dress", category: "Celebrations" },
  { id: "g12", src: "/images/tn-ponnu-mapillai-mandap.jpg", alt: "Kanjeevaram bride and veshti groom on the mandapam", category: "Celebrations" },
  { id: "g8", src: "/images/wiki-sadya.jpg", alt: "Kerala Onam sadhya on banana leaf", category: "Cuisine" },
  { id: "g9", src: "/images/wiki-thanjavur.jpg", alt: "Thanjavur temple gateway at dusk", category: "Celebrations" },
  { id: "g10", src: "/images/wiki-navarathri.jpg", alt: "Carved Kerala palace mandapam", category: "Halls" },
  { id: "g11", src: "/images/wiki-pookalam.jpg", alt: "Onam pookalam floral kolam", category: "Mandapam" },
];

export const amenities = [
  { title: "Climate halls", copy: "Silent air-cooling across sabha and mandapam." },
  { title: "Bridal suites", copy: "Two dressing chambers with vanity and rest." },
  { title: "In-house kitchen", copy: "Tamil, Andhra and North Indian live counters." },
  { title: "Power & water", copy: "Dedicated generator and temple-well supply." },
  { title: "Guest rooms", copy: "Twelve AC rooms for family overnight stay." },
  { title: "Valet park", copy: "200 cars, two-wheeler bay and traffic stewards." },
  { title: "Stage craft", copy: "LED wall, house lights and nadaswaram riser." },
  { title: "Hospitality desk", copy: "Priest, décor and guest coordination." },
];

export const rites = [
  { n: "01", ta: "நிச்சயதார்த்தம்", en: "Nichayathartham", copy: "The promise, under silk." },
  { n: "02", ta: "முகூர்த்தம்", en: "Muhurtham", copy: "East light. Fire. The knot." },
  { n: "03", ta: "நாதஸ்வரம்", en: "Nadaswaram", copy: "The aisle finds its breath." },
  { n: "04", ta: "விருந்து", en: "Virundhu", copy: "Banana leaf. No hurry." },
];

export const testimonials = [
  {
    quote:
      "The mandapam faced the morning light exactly as our astrologer asked. Guests still speak of the jasmine and the silence of the hall.",
    name: "Meenakshi & Aravind",
    place: "Thanjavur · January 2026",
  },
  {
    quote:
      "We hosted 900 for a reception. Service never thinned, the lawn lighting was cinematic, and elders found rest rooms without asking.",
    name: "The Sundaram family",
    place: "Chennai · December 2025",
  },
  {
    quote:
      "Aarthi felt like a palace without the stiffness — gold, wood, and people who understood a Tamil kalyanam in their bones.",
    name: "Lakshmi Iyer",
    place: "Kumbakonam · March 2026",
  },
];

export const contact = {
  name: "Aarthi Mahal",
  tamil: "ஆர்த்தி மஹால்",
  address: "Enjar Cross, near Good Shepherd CBSE School, Sivakasi, Injar, Tamil Nadu 626124",
  plusCode: "FPGW+R8 Sivakasi, Tamil Nadu, India",
  lat: 9.4770031,
  lng: 77.7457531,
  phone: "080120 50999",
  phoneHref: "tel:08012050999",
  whatsapp: "https://wa.me/918012050999",
  email: "bookings@valammahal.in",
  hours: "Open daily · 8:00 AM – 10:00 PM",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=9.4770031%2C77.7457531",
  mapEmbed:
    "https://maps.google.com/maps?q=9.4770031,77.7457531&z=18&hl=en&output=embed",
};
