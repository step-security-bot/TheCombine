// This file was generated by `python scripts/split_dictionary.py -l fr -m 10 -t 2000 -T 20000`.

export const keys = [
  "97",
  "97-98",
  "97-99",
  "97-108",
  "97-110",
  "97-114",
  "98",
  "99",
  "99-97",
  "99-104",
  "99-111",
  "99-114",
  "100",
  "101",
  "101-109",
  "101-110",
  "101-120",
  "101-769",
  "102",
  "103",
  "104",
  "105",
  "106",
  "108",
  "109",
  "110",
  "111",
  "112",
  "114",
  "115",
  "116",
  "118",
];

export default async function (key?: string): Promise<string | undefined> {
  if (!key) {
    return (await import("resources/dictionaries/fr/u.dic")).default;
  }

  switch (key) {
    case "97":
      return (await import("resources/dictionaries/fr/u97.dic")).default;
    case "97-98":
      return (await import("resources/dictionaries/fr/u97-98.dic")).default;
    case "97-99":
      return (await import("resources/dictionaries/fr/u97-99.dic")).default;
    case "97-108":
      return (await import("resources/dictionaries/fr/u97-108.dic")).default;
    case "97-110":
      return (await import("resources/dictionaries/fr/u97-110.dic")).default;
    case "97-114":
      return (await import("resources/dictionaries/fr/u97-114.dic")).default;
    case "98":
      return (await import("resources/dictionaries/fr/u98.dic")).default;
    case "99":
      return (await import("resources/dictionaries/fr/u99.dic")).default;
    case "99-97":
      return (await import("resources/dictionaries/fr/u99-97.dic")).default;
    case "99-104":
      return (await import("resources/dictionaries/fr/u99-104.dic")).default;
    case "99-111":
      return (await import("resources/dictionaries/fr/u99-111.dic")).default;
    case "99-114":
      return (await import("resources/dictionaries/fr/u99-114.dic")).default;
    case "100":
      return (await import("resources/dictionaries/fr/u100.dic")).default;
    case "101":
      return (await import("resources/dictionaries/fr/u101.dic")).default;
    case "101-109":
      return (await import("resources/dictionaries/fr/u101-109.dic")).default;
    case "101-110":
      return (await import("resources/dictionaries/fr/u101-110.dic")).default;
    case "101-120":
      return (await import("resources/dictionaries/fr/u101-120.dic")).default;
    case "101-769":
      return (await import("resources/dictionaries/fr/u101-769.dic")).default;
    case "102":
      return (await import("resources/dictionaries/fr/u102.dic")).default;
    case "103":
      return (await import("resources/dictionaries/fr/u103.dic")).default;
    case "104":
      return (await import("resources/dictionaries/fr/u104.dic")).default;
    case "105":
      return (await import("resources/dictionaries/fr/u105.dic")).default;
    case "106":
      return (await import("resources/dictionaries/fr/u106.dic")).default;
    case "108":
      return (await import("resources/dictionaries/fr/u108.dic")).default;
    case "109":
      return (await import("resources/dictionaries/fr/u109.dic")).default;
    case "110":
      return (await import("resources/dictionaries/fr/u110.dic")).default;
    case "111":
      return (await import("resources/dictionaries/fr/u111.dic")).default;
    case "112":
      return (await import("resources/dictionaries/fr/u112.dic")).default;
    case "114":
      return (await import("resources/dictionaries/fr/u114.dic")).default;
    case "115":
      return (await import("resources/dictionaries/fr/u115.dic")).default;
    case "116":
      return (await import("resources/dictionaries/fr/u116.dic")).default;
    case "118":
      return (await import("resources/dictionaries/fr/u118.dic")).default;
    default:
      return;
  }
}