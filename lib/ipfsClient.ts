import { create as ipfsHttpClient } from "ipfs-http-client";

const ipfsClient = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: process.env.NEXT_PUBLIC_IPFS_AUTH as string,
  },
});

export const saveFileWithIpfs = async (files: FileList | undefined) => {
  if (!files) return;
  try {
    const file = await ipfsClient.add(files[0]);
    const fileUrl = `https://ipfs.infura.io/ipfs/${file.path}`;
    return fileUrl;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default ipfsClient;
