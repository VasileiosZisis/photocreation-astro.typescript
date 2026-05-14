import { isNetlifyPreviewUrl, siteUrl } from "../data/pages";

const robotsBody = isNetlifyPreviewUrl
  ? `User-agent: *
Disallow: /
`
  : `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", siteUrl).toString()}
`;

export const GET = () =>
  new Response(robotsBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
