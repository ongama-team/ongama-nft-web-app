const dataUrlToFileConverter = async (
  dataUrl: string,
  fileName: string
): Promise<File> => {
  const res: Response = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  return new File([blob], fileName, { type: "image/png" });
};

const imageResizer = (file: File, callback: (resizedFile: File) => void) => {
  if (!file) return;

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = (event) => {
    const imageElement: HTMLImageElement = document.createElement("img");
    imageElement.src = `${event.target?.result}`;

    imageElement.onload = async (e) => {
      const imageTarget = e.target as HTMLImageElement;
      const { width, height } = imageTarget;

      const canvas = document.createElement("canvas");
      const maxWidth = 400;

      const scaleSize = maxWidth / width;

      canvas.width = maxWidth;
      canvas.height = height * scaleSize;

      const canvasContext = canvas.getContext("2d");
      canvasContext?.drawImage(imageTarget, 0, 0, canvas.width, canvas.height);

      if (canvasContext) {
        const srcEncoded = canvasContext.canvas.toDataURL(
          imageTarget.src,
          "image/jpeg"
        );

        const resizedFile = await dataUrlToFileConverter(srcEncoded, file.name);

        callback(resizedFile);
      }
    };
  };
};

export default imageResizer;
