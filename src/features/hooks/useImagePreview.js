import { useEffect, useState } from "react";

export const useImagePreview = (imageFile) => {
  const [previewFile, setPreviewFile] = useState(imageFile);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => setPreviewFile(reader.result);
    }
  }, [imageFile]);

  return previewFile;
};
