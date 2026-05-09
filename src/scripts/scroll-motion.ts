const motionItems = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  motionItems.forEach((item) => item.classList.add("is-visible"));
} else {
  document.documentElement.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px 18% 0px",
      threshold: 0.04,
    },
  );

  motionItems.forEach((item) => observer.observe(item));
}
