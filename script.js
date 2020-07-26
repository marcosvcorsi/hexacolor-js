const { body } = document;

function lumiance(hex, luminosity = 0) {
  let hexFormatted = hex.replace(/[^0-9a-f]/gi, '');

  const isValidHex = hexFormatted.length === 6 || hexFormatted.length === 3;

  if (!isValidHex) {
    throw new Error('Invalid HEX');
  }

  if (hexFormatted.length === 3) {
    hexFormatted =
      hexFormatted[0] +
      hexFormatted[0] +
      hexFormatted[1] +
      hexFormatted[1] +
      hexFormatted[2] +
      hexFormatted[2];
  }

  const twoDigitGroup = hexFormatted.match(/([0-9a-f]){2}/gi);

  let newHex = '#';

  for (let twoDigit of twoDigitGroup) {
    const numberFromHex = parseInt(twoDigit, 16);

    const calculateLuminosity = numberFromHex + luminosity * 255;

    const blackOrLuminosity = Math.max(0, calculateLuminosity);
    const partialColor = Math.min(255, blackOrLuminosity);

    const newColor = Math.round(partialColor);

    const numberToHex = newColor.toString(16);
    const finalHex = `0${numberToHex}`.slice(-2);

    newHex = newHex + finalHex;
  }

  return newHex;
}

try {
  body.style.backgroundColor = lumiance('#6633cc', 0.2);
} catch (err) {
  console.log(err);
}
