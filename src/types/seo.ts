export type SiteRoute =
  | "/"
  | "/contact/"
  | "/privacy-policy/"
  | "/cypriot-weddings/"
  | "/english-weddings/"
  | "/christenings/"
  | "/proposals/"
  | "/families/"
  | "/models/";

export type SeoMeta = {
  title: string;
  description: string;
  canonicalPath: SiteRoute;
  image?: string;
};
