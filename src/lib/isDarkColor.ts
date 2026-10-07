/** Returns true when a Keystatic background color is dark enough to need light reading surfaces. */
export function isDarkColor(value?: string) {
  if (!value) return false;
  const color = value.trim().toLowerCase();
  const named: Record<string, [number, number, number]> = {
    black: [0, 0, 0], navy: [0, 0, 128], midnightblue: [25, 25, 112],
    darkblue: [0, 0, 139], indigo: [75, 0, 130], maroon: [128, 0, 0],
    darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79],
  };
  let channels = named[color];
  const hex = color.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?.[1];
  if (hex) {
    const expanded = hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex;
    channels = [0, 2, 4].map((i) => parseInt(expanded.slice(i, i + 2), 16)) as [number, number, number];
  }
  const rgb = color.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/);
  if (rgb) channels = [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  if (!channels) return false;

  const luminance = channels.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return luminance[0] * 0.2126 + luminance[1] * 0.7152 + luminance[2] * 0.0722 < 0.32;
}
