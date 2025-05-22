import https from "https";
import fs from "fs";
import path from "path";

// Helps to remove a filename from dir-like string
// example "src/components/filename.file"
function removeFileName(source: string): string {
  const fileName = path.basename(source);
  return source.replace(fileName, "");
}

// Makes a nestes directories and ignores the filemname
function mkDir(pathname: string) {
  const pathWothoutFileName = removeFileName(pathname);
  if (!fs.existsSync(pathWothoutFileName)) {
    fs.mkdirSync(pathWothoutFileName, { recursive: true });
  }
}

/**
 * Downloads a file from the specified URL and saves it to the given target directory.
 *
 * @param url - The URL object representing the file to download.
 * @param targetDir - The local directory path where the downloaded file should be saved.
 *
 * The function extracts the file name from the URL, creates the necessary directory structure,
 * and streams the file content to disk. Once the download is complete, it closes the file stream
 * and logs a completion message.
 *
 * @remarks
 * - The function does not handle errors or HTTP redirects.
 */
const download = (url: URL, targetDir: string) => {
  const fullPath = path.join(targetDir, url.pathname);
  const fileStream = fs.createWriteStream(fullPath);

  mkDir(fullPath);

  https.get(url, (response) => {
    response.pipe(fileStream);

    // after download completed close filestream
    fileStream.on("finish", () => {
      fileStream.close();
      console.log("Download Completed");
    });
  });
};

export { download };
