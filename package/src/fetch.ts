import https from "https"; // or 'https' for https:// URLs
import fs from "fs";

const request = (url: string, directory: string) => {
  const file = fs.createWriteStream(directory);

  https.get(url, (response) => {
    response.pipe(file);

    // after download completed close filestream
    file.on("finish", () => {
      file.close();
      console.log("Download Completed");
    });
  });
};
export default request;
