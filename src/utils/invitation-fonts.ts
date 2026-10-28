// Only request additional weights for families whose supported weights are known.
const weights: Record<string, string> = {
  "Cormorant Garamond": "300;400;500;600;700",
  Montserrat: "300;400;500;600;700",
  "DM Sans": "400;500;600;700",
  "Old Standard TT": "400;700",
  "Libre Baskerville": "400;700",
  "Dancing Script": "400;500;600;700",
  Lora: "400;500;600;700",
};

export function invitationFontLinks(families: Array<string | undefined>): string[] {
  return [...new Set(families.filter((family): family is string => Boolean(family)))].map(
    (family) => {
      const name = encodeURIComponent(family).replace(/%20/g, "+");
      const axis = weights[family] ? `:wght@${weights[family]}` : "";
      return `https://fonts.googleapis.com/css2?family=${name}${axis}&display=swap`;
    },
  );
}
