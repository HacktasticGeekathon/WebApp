export const capitalizeType = (word: string): string => {
  if (!word) return "";
  if (word === "factCheck") return capitalizeType("fact");
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
