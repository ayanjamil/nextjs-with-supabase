"use client";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
interface DownloadButtonProps {
  imagePath: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ imagePath }) => {
  const handleDownload = async () => {
    try {
      // Fetch the image
      const response = await fetch(imagePath);
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = url;

      // Extract filename from path
      const filename = imagePath.split("/").pop() || "wallpaper.jpg";
      link.download = filename;

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-sm"
      aria-label="Download wallpaper"
    >
      <ArrowDownOnSquareStackIcon className="stroke-black stroke-[0.75] min-w-5 w-5" />
    </button>
  );
};

export default DownloadButton;
