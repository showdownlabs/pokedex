function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

export function rgbToHex(rgb) {
  const rHex = rgb[0].toString(16).padStart(2, '0');
  const gHex = rgb[1].toString(16).padStart(2, '0');
  const bHex = rgb[2].toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

function blendColors(color1, color2, strength = 0.8) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const blendedRgb = [
    Math.round((1 - strength) * rgb1[0] + strength * rgb2[0]),
    Math.round((1 - strength) * rgb1[1] + strength * rgb2[1]),
    Math.round((1 - strength) * rgb1[2] + strength * rgb2[2]),
  ];

  const blendedHex = rgbToHex(blendedRgb);

  return blendedHex;
}

export { blendColors };