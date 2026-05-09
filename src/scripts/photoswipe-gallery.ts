import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const galleries = document.querySelectorAll<HTMLElement>("[data-photoswipe-gallery]");

galleries.forEach((gallery, index) => {
  if (!gallery.id) {
    gallery.id = `photoswipe-gallery-${index + 1}`;
  }

  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${gallery.id}`,
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();
});
