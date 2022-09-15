import { Web3Storage } from "web3.storage";

const storageClient = new Web3Storage({
  token: `${process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN}`,
});

export const saveFileWithWeb3Storage = async (file: File[]) => {
  if (!file) return;

  const fileIdenfier = await storageClient.put(file);

  const retrieveFile = await storageClient.get(fileIdenfier);

  if (!retrieveFile?.ok) throw new Error("Failed to retrieve File");

  const storedFile = await retrieveFile.files();

  return `https://${fileIdenfier}.ipfs.w3s.link/${storedFile[0].name}`;
};
