export function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeImagePath(path: string) {
  if (!path) {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}
