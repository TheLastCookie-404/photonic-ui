import https from "https"; // or 'https' for https:// URLs
import fs from "fs";

const download = (url: string, directory: string) => {
  const fileName = url.split("/").pop();
  const file = fs.createWriteStream(`${directory}/${fileName}`);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  https.get(url, (response) => {
    response.pipe(file);

    // after download completed close filestream
    file.on("finish", () => {
      file.close();
      console.log("Download Completed");
    });
  });
};
export { download };
