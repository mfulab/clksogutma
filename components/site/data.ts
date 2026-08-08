export const COMPANY = {
  name: "Çelik Soğutma",
  phone: "0552 204 64 82",
  phoneHref: "tel:+905522046482",
  email: "uzun.mfu13@gmail.com",
  whatsapp: "https://wa.me/905522046482",
  mapUrl:
    "https://yandex.com.tr/maps/org/celik_sogutma/109157144694/?ll=31.161030%2C40.840652&z=17",
  mapEmbed:
    "https://yandex.com.tr/map-widget/v1/?ll=31.161030%2C40.840652&z=17&mode=search&text=%C3%87elik%20So%C4%9Futma",
}

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Ürünler", href: "#products" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#contact" },
]

export type Category = {
  title: string
  description: string
  icon: string
}

export type Climate = "heating" | "cooling"

export const CATEGORIES: (Category & { climate: Climate })[] = [
  {
    title: "Split Klimalar",
    description: "Sessiz, enerji verimli inverter duvar tipi split klimalar.",
    icon: "wind",
    climate: "cooling",
  },
  {
    title: "Salon Tipi Klimalar",
    description: "Geniş alanlar için yüksek kapasiteli dikey salon klimaları.",
    icon: "air-vent",
    climate: "cooling",
  },
  {
    title: "VRF & Kaset Sistemler",
    description: "Ticari mekanlar için merkezi VRF ve tavan kaseti çözümleri.",
    icon: "snowflake",
    climate: "cooling",
  },
  {
    title: "Odun & Pelet Sobaları",
    description: "Yüksek verimli, uzun ömürlü ve şık tasarımlı ısıtma sobaları.",
    icon: "flame",
    climate: "heating",
  },
  {
    title: "Şömineler",
    description: "Modern hazneli ve klasik şömine sistemleri.",
    icon: "home",
    climate: "heating",
  },
  {
    title: "Montaj & Bakım",
    description: "Klima ve soba montajı, gaz dolumu, baca ve periyodik bakım.",
    icon: "wrench",
    climate: "cooling",
  },
]

export type Product = {
  name: string
  description: string
  capacity: string
  image: string
  climate: Climate
  tag: string
}

export const PRODUCTS: Product[] = [
  {
    name: "Inverter Split Klima",
    description: "A++ enerji sınıfı, sessiz çalışan duvar tipi inverter klima.",
    capacity: "12.000 BTU · 40 m²",
    image: "/images/product-split-ac.png",
    climate: "cooling",
    tag: "Soğutma",
  },
  {
    name: "Salon Tipi Klima",
    description: "Geniş yaşam alanları için yüksek kapasiteli dikey klima.",
    capacity: "48.000 BTU · 90 m²",
    image: "/images/product-salon-ac.png",
    climate: "cooling",
    tag: "Soğutma",
  },
  {
    name: "VRF Tavan Kaseti",
    description: "Ofis ve mağazalar için 4 yöne üflemeli merkezi kaset ünite.",
    capacity: "Ticari · Merkezi",
    image: "/images/product-vrf.png",
    climate: "cooling",
    tag: "Soğutma",
  },
  {
    name: "Nordic Odun Sobası",
    description: "Panoramik camlı, mat siyah gövdeli premium odun sobası.",
    capacity: "8 kW · 120 m²",
    image: "/images/product-wood-stove.png",
    climate: "heating",
    tag: "Isıtma",
  },
  {
    name: "Aura Pelet Sobası",
    description: "Dijital kontrollü, otomatik beslemeli ekonomik pelet sobası.",
    capacity: "10 kW · 150 m²",
    image: "/images/product-pellet-stove.png",
    climate: "heating",
    tag: "Isıtma",
  },
  {
    name: "Panorama Hazneli Şömine",
    description: "Geniş cam yüzeyli, gömme tip modern şömine haznesi.",
    capacity: "12 kW · 180 m²",
    image: "/images/product-fireplace.png",
    climate: "heating",
    tag: "Isıtma",
  },
]

export type Feature = {
  title: string
  description: string
  icon: string
}

export const FEATURES: Feature[] = [
  {
    title: "Klima & Soba Montajı",
    description: "Uzman ekibimizle klima ve soba kurulumunda güvenli, standartlara uygun montaj.",
    icon: "hard-hat",
  },
  {
    title: "Sertifikalı Ürünler",
    description: "CE ve TSE belgeli, yüksek verimli klima ve ısıtma sistemleri.",
    icon: "badge-check",
  },
  {
    title: "Garanti",
    description: "Tüm klima ve sobalarda uzun süreli üretici garantisi ve destek.",
    icon: "shield-check",
  },
  {
    title: "A++ Enerji Verimi",
    description: "Inverter klima ve yüksek verimli sobalarla düşük enerji tüketimi.",
    icon: "leaf",
  },
  {
    title: "Bakım & Gaz Dolumu",
    description: "Klima periyodik bakımı, gaz dolumu ve soba baca temizliği.",
    icon: "truck",
  },
  {
    title: "Teknik Destek",
    description: "Satış sonrası bakım, yedek parça ve teknik danışmanlık.",
    icon: "headphones",
  },
]

export const FAQS = [
  {
    question: "Klima montajını ve gaz dolumunu siz mi yapıyorsunuz?",
    answer:
      "Evet. Uzman ekibimiz split, salon tipi ve VRF klimaların montajını, gaz dolumunu ve periyodik bakımını standartlara uygun şekilde gerçekleştirir.",
  },
  {
    question: "Hem soğutma hem ısıtma çözümü sunuyor musunuz?",
    answer:
      "Evet. Yaz için inverter klimalar, kış için odun/pelet sobaları ve şömineler dahil dört mevsim konfor sağlayan komple çözümler sunuyoruz.",
  },
  {
    question: "Odamın büyüklüğüne uygun klimayı nasıl seçerim?",
    answer:
      "Soğutulacak alanın metrekaresini ve pencere yönünü bize iletmeniz yeterli. Ekibimiz doğru BTU kapasitesine sahip modeli sizin için belirler.",
  },
  {
    question: "Inverter klima gerçekten daha mı ekonomik?",
    answer:
      "Evet. Inverter teknolojisi kompresörü ihtiyaca göre çalıştırarak sabit devirli klimalara kıyasla belirgin oranda enerji tasarrufu sağlar.",
  },
  {
    question: "Ürünlerin garantisi ve satış sonrası desteği var mı?",
    answer:
      "Tüm klima ve sobalarımız üretici garantisi kapsamındadır. Montaj sonrası bakım, yedek parça ve teknik destek hizmetimiz süreklidir.",
  },
  {
    question: "Satın almadan önce ürünleri görebilir miyim?",
    answer:
      "Elbette. Mağazamıza gelerek klima ve soba modellerini yerinde inceleyebilir, çalışan demo ürünleri görebilirsiniz.",
  },
]

export const WORKING_HOURS = [
  { day: "Pazartesi - Cuma", hours: "08:30 - 19:00" },
  { day: "Cumartesi", hours: "09:00 - 18:00" },
  { day: "Pazar", hours: "Kapalı" },
]
