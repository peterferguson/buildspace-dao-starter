import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9F686E523B0DAe5C188882Ab16Bdfa4358651B15"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Early Adopter",
        description: "This NFT will give you access to RoundtableDAO!",
        image: readFileSync("scripts/assets/icon.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
