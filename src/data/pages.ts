import type { SeoMeta, SiteRoute } from "../types/seo";

export const siteUrl = "https://www.studiophotocreationbyd.com";

export const defaultOpenGraphImage =
  "https://res.cloudinary.com/dmdbza74n/image/upload/v1774085842/studiophotocreation/logo-black-trim_niv0nr.png";

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
    title: "Studio Photo Creation by D",
    description: "Photography and video studio in Paphos, Cyprus",
    canonicalPath: "/",
    image: defaultOpenGraphImage,
  },
  "/contact/": {
    title: "Contact Me - Studio Photo Creation by D",
    description:
      "How to contact Dimitris Domouchtsis. Facebook page, instagram and work phone number",
    canonicalPath: "/contact/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1632243600/studiophotocreation/wedding-stories/jemma-carl/CARL_JEMMA_13_j0orvq.webp",
  },
  "/privacy-policy/": {
    title: "Privacy Policy - Studio Photo Creation by D",
    description: "Privacy policy for Studio Photo Creation by D",
    canonicalPath: "/privacy-policy/",
    image: defaultOpenGraphImage,
  },
  "/cypriot-weddings/": {
    title: "Cypriot Wedding photos - Studio Photo Creation by D",
    description:
      "Cypriot wedding photos from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/cypriot-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702129037/studiophotocreation/cy-we_2v/SPC_3192_ueixrp.webp",
  },
  "/english-weddings/": {
    title: "English Weddings photos - Studio Photo Creation by D",
    description:
      "English weddings photos from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/english-weddings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702227527/studiophotocreation/en-we_2v/SPC_1158_amvpto.webp",
  },
  "/christenings/": {
    title: "Christening photos - Studio Photo Creation by D",
    description:
      "Christening photos, from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/christenings/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1702230268/studiophotocreation/ch_2v/SPC_0966_phsn9n.webp",
  },
  "/proposals/": {
    title: "Proposal photos - Studio Photo Creation by D",
    description: "Proposal photos from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/proposals/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0211_i8jygs.webp",
  },
  "/families/": {
    title: "Family photos - Studio Photo Creation by D",
    description: "Family photos from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/families/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636569597/studiophotocreation/families/Sofie-Ioulia/SPC_0368_ahyfho.webp",
  },
  "/models/": {
    title: "Model photos - Studio Photo Creation by D",
    description: "Model photos from wedding photographer Dimitris Domouchtsis",
    canonicalPath: "/models/",
    image:
      "https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_1073_sejk1u.webp",
  },
} satisfies Record<SiteRoute, SeoMeta>;

export const getCanonicalUrl = (canonicalPath: SiteRoute) =>
  new URL(canonicalPath, siteUrl).toString();
