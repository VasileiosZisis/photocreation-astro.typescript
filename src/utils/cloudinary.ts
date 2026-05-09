export const cloudinaryImage = (src: string, width: number) =>
  src.includes("/upload/")
    ? src.replace("/upload/", `/upload/c_limit,w_${width},f_auto,q_auto/`)
    : src;
