import { SlideItem, ServiceItem, PortfolioItem, USPItem, TestimonialItem, WorkflowStep } from "./types";

export const WHATSAPP_NUMBER = "6281122299777"; // 081122299777 -> +62
export const WHATSAPP_DISPLAY = "081122299777";
export const INSTAGRAM_DISPLAY = "@kurniagarden_landscape";

export const getWAMessageUrl = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    image: "https://dpa79oyyyfxcd.cloudfront.net/laravel/design/20b70250-67fa-43ee-a247-41a22a23dd0f.png",
    subtitle: "Landscape Profesional",
    title: "Sentuhan Keindahan Alami untuk Hunian Anda",
    description: "Kami mendesain dan membangun taman asri, seimbang, dan menenangkan dengan pengerjaan profesional bergaransi."
  },
  {
    id: 2,
    image: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg",
    subtitle: "Kolam Koi & Hias",
    title: "Gemercik Air Sejuk di Sudut Halaman",
    description: "Nikmati kedamaian air mengalir dengan kolam koi eksklusif dan sistem filtrasi modern rendah perawatan."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "minimalis",
    title: "Taman Minimalis",
    description: "Solusi taman modern untuk lahan terbatas. Fokus pada kesederhanaan, kebersihan garis, dan keasrian fungsional.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg",
    iconName: "Leaf"
  },
  {
    id: "tropis",
    title: "Taman Tropis",
    description: "Hadirkan atmosfer hutan hujan tropis yang rimbun dan segar di rumah Anda. Menggunakan aneka tanaman bernuansa hangat.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518439/taman_tropis1_cc8yeg.jpg",
    iconName: "Trees"
  },
  {
    id: "kering",
    title: "Taman Kering",
    description: "Desain landscape modern bergaya Jepang atau mediterania. Sangat estetik, minim perawatan, cocok untuk area semi indoor.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518452/taman_kering_twdnj8.jpg",
    iconName: "Sun"
  },
  {
    id: "vertical",
    title: "Vertical Garden",
    description: "Maksimalkan dinding kosong dengan taman vertikal yang indah bersistem irigasi otomatis. Solusi hijau ruang terbatas.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518429/vertical_garden_lftjsp.jpg",
    iconName: "ArrowUp"
  },
  {
    id: "kolam",
    title: "Kolam Hias & Air Mancur",
    description: "Pembuatan kolam koi, kolam minimalis, air terjun buatan, dan relief batu alam. Desain air mengalir yang menyegarkan pikiran.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518460/kolam_hias_ca6nfj.jpg",
    iconName: "Droplet"
  },
  {
    id: "hardscape",
    title: "Gazebo & Hardscape",
    description: "Pemasangan jalan setapak (stepping stone), pemasangan carport batu sikat, pembangunan gazebo berbahan kayu berkualitas.",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518464/hardscape_agt8eu.jpg",
    iconName: "Box"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Taman Minimalis Modern Rooftop",
    category: "minimalis",
    categoryLabel: "Minimalis",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg",
    dimensions: "6 x 4 Meter",
    client: "Bp. Hartono - Sentul"
  },
  {
    id: 2,
    title: "Taman Depan Rumah Estetik",
    category: "minimalis",
    categoryLabel: "Minimalis",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518447/taman_minimalis1_bzcvo2.jpg",
    dimensions: "5 x 3 Meter",
    client: "Ibu Amanda - BSD City"
  },
  {
    id: 3,
    title: "Taman Tropis Rimbun & Elegan",
    category: "tropis",
    categoryLabel: "Tropis",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518439/taman_tropis1_cc8yeg.jpg",
    dimensions: "12 x 5 Meter",
    client: "Bp. Wibowo - Pondok Indah"
  },
  {
    id: 4,
    title: "Taman Kering Santai Belakang Rumah",
    category: "kering",
    categoryLabel: "Taman Kering",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518452/taman_kering_twdnj8.jpg",
    dimensions: "4 x 3 Meter",
    client: "Bp. Gunawan - Bekasi"
  },
  {
    id: 5,
    title: "Vertical Garden Hijau Sejuk Dinding Samping",
    category: "vertical",
    categoryLabel: "Vertical Garden",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518429/vertical_garden_lftjsp.jpg",
    dimensions: "8 x 3.5 Meter",
    client: "Ibu Regina - Kelapa Gading"
  },
  {
    id: 6,
    title: "Kolam Koi Mewah dengan Air Terjun",
    category: "kolam",
    categoryLabel: "Kolam Hias",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518460/kolam_hias_ca6nfj.jpg",
    dimensions: "5 x 2.5 Meter",
    client: "Bp. Ronald - Bintaro"
  },
  {
    id: 7,
    title: "Pemasangan Hardscaping & Step Stones",
    category: "hardscape",
    categoryLabel: "Hardscape",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518464/hardscape_agt8eu.jpg",
    dimensions: "Full Halaman Belakang",
    client: "Ibu Siska - Cibubur"
  },
  {
    id: 8,
    title: "Kombinasi Modern Minimalis Kurnia Garden",
    category: "minimalis",
    categoryLabel: "Minimalis",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1779518442/taman_minimalis2_m9anif.jpg",
    dimensions: "8 x 4 Meter",
    client: "Villa Bukit Indah - Bogor"
  }
];

export const USPS: USPItem[] = [
  {
    id: 1,
    title: "Konsultasi & Survey Gratis",
    description: "Kami datang ke lokasi Anda secara cuma-cuma untuk berdiskusi, mengukur lahan, dan memberikan rekomendasi terbaik.",
    iconName: "HelpCircle"
  },
  {
    id: 2,
    title: "Desain Sesuai Budget",
    description: "Kami fleksibel merancang skema landscape dengan tetap mengedepankan kualitas tanpa melampaui rencana anggaran Anda.",
    iconName: "DollarSign"
  },
  {
    id: 3,
    title: "Tim Profesional & Berpengalaman",
    description: "Dikerjakan langsung oleh ahli landscape terlatih yang mengerti betul jenis tanaman, pupuk, kontur tanah, dan sistem air.",
    iconName: "ShieldCheck"
  },
  {
    id: 4,
    title: "Pengerjaan Rapi & Tepat Waktu",
    description: "Kami mematuhi deadline yang disepakati dengan pengerjaan yang teliti, mendetail, bersih, dan bergaransi kepuasan.",
    iconName: "Clock"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Bp. Adrian Permadi",
    location: "Pondok Indah, Jakarta Selatan",
    rating: 5,
    comment: "Kurnia Garden luar biasa! Taman minimalis depan rumah kami diselesaikan dengan sangat bersih dan cepat. Sistem penyiraman otomatisnya berjalan sempurna. Sangat direkomendasikan!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: 2,
    name: "Ibu Desy Ratnasari",
    location: "Sentul City, Bogor",
    rating: 5,
    comment: "Awalnya bingung dengan desain kolam koi karena lahannya miring. Setelah disurvey gratis oleh Kurnia Garden, dapet skema yang pas banget dengan budget. Sekarang halaman belakang jadi tempat favorit keluarga.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: 3,
    name: "Bp. Dr. Hendra Wijaya",
    location: "BSD Serpong, Tangerang",
    rating: 5,
    comment: "Pengerjaan vertical garden dindin kantor kami sangat rapi. Dari survey pertama sampai finishing sangat profesional. Tanaman hidup subur karena pengerjaannya profesional.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: "Konsultasi & Fast Response WA",
    description: "Konsultasikan keinginan dan ukuran kasar lahan Anda kepada tim Kurnia Garden secara praktis via WhatsApp.",
    iconName: "MessageCircle"
  },
  {
    id: 2,
    title: "Survey & Pengukuran Lokasi",
    description: "Kami menjadwalkan kunjungan gratis ke lokasi Anda untuk mengukur secara presisi serta menganalisis pencahayaan dan tanah.",
    iconName: "Compass"
  },
  {
    id: 3,
    title: "Desain & Penawaran Bergaransi",
    description: "Kami membuat skema desain lanskap beserta rincian biaya penawaran (RAB) transparan yang disesuaikan dengan budget.",
    iconName: "FileText"
  },
  {
    id: 4,
    title: "Proses Pengerjaan Profesional",
    description: "Tim ahli kami mulai membangun taman impian Anda dengan standar keamanan tinggi, efisien, rapi, dan diawasi ketat.",
    iconName: "Spade"
  },
  {
    id: 5,
    title: "Finishing & Garansi Perawatan",
    description: "Pemeriksaan akhir hasil pengerjaan bersama Anda. Kami juga memberikan edukasi dan panduan pemeliharaan taman agar tetap asri.",
    iconName: "Heart"
  }
];
