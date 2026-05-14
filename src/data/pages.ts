import type { SeoMeta, SiteRoute } from "../types/seo";

export const siteUrl = "https://www.studiophotocreationbyd.com";

export const defaultOpenGraphImage =
  "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1720_opgooy.webp";

export const routeChecklist: SiteRoute[] = [
  "/",
  "/contact/",
  "/privacy-policy/",
  "/cypriot-weddings/",
  "/english-weddings/",
  "/christenings/",
  "/proposals/",
  "/families/",
  "/models/",
];

export const pageMetadata = {
  "/": {
    title: "Wedding Photographer in Paphos, Cyprus | Studio Photo Creation by D",
    description:
      "Wedding, christening, proposal, family, and portrait photography in Paphos, Cyprus by Dimitris Domouchtsis",
    canonicalPath: "/",
    image: defaultOpenGraphImage,
  },
  "/contact/": {
    title: "Contact Studio Photo Creation by D | Paphos Photographer",
    description:
      "Contact Dimitris Domouchtsis for wedding, christening, proposal, family, and portrait photography in Paphos, Cyprus",
    canonicalPath: "/contact/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1632243600/studiophotocreation/wedding-stories/jemma-carl/CARL_JEMMA_13_j0orvq.webp",
  },
  "/privacy-policy/": {
    title: "Privacy Policy | Studio Photo Creation by D",
    description:
      "Privacy policy for Studio Photo Creation by D, a photography and video studio in Paphos, Cyprus",
    canonicalPath: "/privacy-policy/",
    image: defaultOpenGraphImage,
  },
  "/cypriot-weddings/": {
    title: "Cypriot Wedding Photographer in Paphos | Studio Photo Creation by D",
    description:
      "Cypriot wedding photography in Paphos and across Cyprus by Dimitris Domouchtsis of Studio Photo Creation by D",
    canonicalPath: "/cypriot-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702129037/studiophotocreation/cy-we_2v/SPC_3192_ueixrp.webp",
  },
  "/english-weddings/": {
    title: "English Wedding Photographer in Cyprus | Studio Photo Creation by D",
    description:
      "English wedding photography in Cyprus for couples celebrating in Paphos and beyond with Studio Photo Creation by D",
    canonicalPath: "/english-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702227527/studiophotocreation/en-we_2v/SPC_1158_amvpto.webp",
  },
  "/christenings/": {
    title: "Christening Photographer in Paphos | Studio Photo Creation by D",
    description:
      "Christening photography in Paphos, Cyprus by Dimitris Domouchtsis, capturing family celebrations with a refined documentary style",
    canonicalPath: "/christenings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702230268/studiophotocreation/ch_2v/SPC_0966_phsn9n.webp",
  },
  "/proposals/": {
    title: "Proposal Photographer in Paphos | Studio Photo Creation by D",
    description:
      "Proposal photography in Paphos, Cyprus for couples planning intimate, emotional, and scenic engagement moments",
    canonicalPath: "/proposals/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0211_i8jygs.webp",
  },
  "/families/": {
    title: "Family Photographer in Paphos | Studio Photo Creation by D",
    description:
      "Family photography in Paphos, Cyprus by Dimitris Domouchtsis, including relaxed outdoor and portrait sessions",
    canonicalPath: "/families/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636569597/studiophotocreation/families/Sofie-Ioulia/SPC_0368_ahyfho.webp",
  },
  "/models/": {
    title: "Model Portfolio Photographer in Paphos | Studio Photo Creation by D",
    description:
      "Model and portrait photography in Paphos, Cyprus for personal branding, portfolio, and editorial-style sessions",
    canonicalPath: "/models/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_1073_sejk1u.webp",
  },
} satisfies Record<SiteRoute, SeoMeta>;

export const getCanonicalUrl = (canonicalPath: SiteRoute) =>
  new URL(canonicalPath, siteUrl).toString();
