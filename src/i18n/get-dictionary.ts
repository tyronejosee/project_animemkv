import type { Locale } from "./config";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).en;
    case "es":
    default:
      return (await import("./dictionaries/es")).es;
  }
}
