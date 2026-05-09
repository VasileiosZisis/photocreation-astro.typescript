import type { SiteRoute } from "../types/seo";

export type HomepageCategory = {
  title: string;
  href: SiteRoute;
  image: string;
  alt: string;
  widthOffset: number;
  height: string;
  top: string;
  left: string;
};

export const heroVideo = {
  src: "https://res.cloudinary.com/dmdbza74n/video/upload/v1632241719/studiophotocreation/video_l2pj3j.mp4",
  type: "video/mp4",
};

export const transitionImages = {
  left: {
    src: "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242600/studiophotocreation/cypriot-weddings/jennifer-xaris/SPC_0655_lgvyls.webp",
    alt: "Bride and groom during a Cypriot wedding celebration in Paphos.",
  },
  middle: {
    src: "https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2355_v7jz5e.webp",
    alt: "Wedding couple portrait photographed by Studio Photo Creation.",
  },
  right: {
    src: "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1741_bmmhfi.webp",
    alt: "Outdoor wedding portrait from Studio Photo Creation.",
  },
};

export const homepageCategories: HomepageCategory[] = [
  {
    title: "CYPRIOT WEDDINGS",
    href: "/cypriot-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1720_opgooy.webp",
    alt: "Cypriot wedding couple portrait.",
    widthOffset: 65,
    height: "20%",
    top: "10%",
    left: "15%",
  },
  {
    title: "ENGLISH WEDDINGS",
    href: "/english-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0645_cun0gt.webp",
    alt: "English wedding couple portrait.",
    widthOffset: 70,
    height: "30%",
    top: "7%",
    left: "60%",
  },
  {
    title: "CHRISTENINGS",
    href: "/christenings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1632244388/studiophotocreation/christenings/agapi/SPC_0048_gmdhd9.webp",
    alt: "Christening photography detail.",
    widthOffset: 70,
    height: "20%",
    top: "35%",
    left: "10%",
  },
  {
    title: "PROPOSALS",
    href: "/proposals/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636567847/studiophotocreation/proposals/Antreas-Athina/SPC_0079_smxc3k.webp",
    alt: "Proposal photography moment.",
    widthOffset: 65,
    height: "20%",
    top: "42%",
    left: "50%",
  },
  {
    title: "FAMILIES",
    href: "/families/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636569417/studiophotocreation/families/Rianna-Ralf/SPC_0085_qfbwmg.webp",
    alt: "Family portrait photographed by Studio Photo Creation.",
    widthOffset: 70,
    height: "30%",
    top: "62%",
    left: "10%",
  },
  {
    title: "MODELS",
    href: "/models/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0923_c3iupa.webp",
    alt: "Model portrait photographed by Studio Photo Creation.",
    widthOffset: 70,
    height: "20%",
    top: "68%",
    left: "55%",
  },
];

export const contactCtaImage = {
  src: "https://res.cloudinary.com/dmdbza74n/image/upload/v1636567848/studiophotocreation/proposals/Antreas-Athina/SPC_0084_df2zky.webp",
  alt: "Couple portrait used for the Studio Photo Creation contact call to action.",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Studio Photo Creation by D",
  url: "https://www.studiophotocreationbyd.com",
  logo: "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242164/studiophotocreation/logo_white_mkjefy.png",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Dimitris Domouchtsis",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Apostolou Pavlou 14A",
    addressRegion: "Paphos",
    postalCode: "8046",
    addressCountry: "CY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+35799541649",
    email: "photocreation@cytanet.com.cy",
  },
  sameAs: [
    "https://www.facebook.com/DomouchtsisDimitris",
    "https://www.instagram.com/domouchtsis",
  ],
};
