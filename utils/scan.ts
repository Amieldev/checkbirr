import jsQR from "jsqr";
import { Jimp } from "jimp";

export default async function scan(imagePath: string) {
  const image = await Jimp.read(imagePath);
  const { data, width, height } = image.bitmap;

  const code = jsQR(new Uint8ClampedArray(data), width, height);

  if (code) {
    return code.data;
  } else {
    console.log("No QR code found");
    return null;
  }
}
