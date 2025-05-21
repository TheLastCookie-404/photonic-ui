import https from "https"; // or 'https' for https:// URLs
import fs from "fs";
import path from "path";

const download = (url: URL, targetDir: string) => {
  const fileName = url.pathname.split("/").pop()!;
  const filePath = url.pathname.replace(fileName, "");
  const directory = path.join(targetDir, filePath);
  const file = fs.createWriteStream(path.join(directory, fileName));

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
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
