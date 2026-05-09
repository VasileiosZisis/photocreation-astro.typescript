import type { SeoMeta, SiteRoute } from "./seo";

export type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
};

export type GalleryEntry = {
  title: string;
  slug: string;
  route: SiteRoute;
  seo: SeoMeta;
  coverImage: GalleryImage;
  images: GalleryImage[];
};
