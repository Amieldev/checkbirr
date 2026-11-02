import jsQR from "jsqr"
import { Jimp } from "jimp";

export default async function scan(imagePath: string):Promise<string> {
  try {
    const image = await Jimp.read(imagePath);
    const { data, width, height } = image.bitmap;

const code = jsQR.default(new Uint8ClampedArray(data), width, height);

    if (code) {
      return code.data;
    } else {
      console.log("No QR code found");
      return `Error: QrCode Not Found`
    }
  } catch (error) {
    console.log(error)
    return `Error: ${error}`
  }
}
