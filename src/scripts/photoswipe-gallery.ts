import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const galleries = document.querySelectorAll<HTMLElement>("[data-photoswipe-gallery]");

const updateImageDimensions = (link: HTMLAnchorElement) => {
  const image = link.querySelector("img");

  if (!image?.naturalWidth || !image.naturalHeight) {
    return;
  }

  const ratio = image.naturalWidth / image.naturalHeight;
  const longSide = 1600;
  const width = ratio >= 1 ? longSide : Math.round(longSide * ratio);
  const height = ratio >= 1 ? Math.round(longSide / ratio) : longSide;

  link.dataset.pswpWidth = String(width);
  link.dataset.pswpHeight = String(height);
};

galleries.forEach((gallery, index) => {
  if (!gallery.id) {
    gallery.id = `photoswipe-gallery-${index + 1}`;
  }

  gallery.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a");

      if (link) {
        updateImageDimensions(link);
      }
    },
    { capture: true },
  );

  gallery
    .querySelectorAll<HTMLAnchorElement>("a")
    .forEach((link) => updateImageDimensions(link));

  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${gallery.id}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
});
