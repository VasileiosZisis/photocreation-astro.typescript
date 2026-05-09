import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const routePathSchema = z
  .string()
  .regex(/^\/(?:$|[a-z0-9-]+\/$)/, "Use site paths like / or /cypriot-weddings/.");

const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  canonicalPath: routePathSchema,
  image: z.string().url().optional(),
});

const galleryImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1),
  title: z.string().min(1).optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

const galleries = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/galleries",
    generateId: ({ entry }) => entry.replace(/\.json$/, ""),
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    route: routePathSchema,
    seo: seoSchema,
    coverImage: galleryImageSchema,
    images: z.array(galleryImageSchema).min(1),
  }),
});

export const collections = { galleries };
