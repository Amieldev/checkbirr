import scan from "./utils/scan.js"
import identifyBank from "./utils/identifyBank.js"

async function checkbirr(imagePath: string) {
  const url: string = await scan(imagePath);
  const bank: string = identifyBank(url);


}

checkbirr(`photo.jpg`)
