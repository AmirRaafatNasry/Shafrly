export interface EncodingResult {
  original: string;
  encoded: string;
  cipher: string;
  key?: string;
  timestamp: number;
}

export class FileService {
  public static downloadAsText(filename: string, result: EncodingResult): void {
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "text/plain",
    });
    this.downloadBlob(blob, filename);
  }

  public static downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}