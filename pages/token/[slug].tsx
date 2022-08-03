import NftDetailsPage from "@components/NftDetailsPage";
import Head from "next/head";
import React from "react";

const NftDetails = () => {
  const nft = {
    id: "17",
    tokenUri: "dlwlfxaqkuw950gf3hegq",
    creatorId: "2",
    creatorAddress: "0xdBc8997C1273bD8bc5af15f16df26C4FA03c0852",
    ownerId: "2",
    ownerAddress: "0xdBc8997C1273bD8bc5af15f16df26C4FA03c0852",
    dropId: null,
    mintTransactionHash:
      "0x00b19f9513d1e814f0eed5ad5e8ace8650ec8b3b216407be150f5d7fee600a95",
    tokenID: 56,
    name: "Big_k",
    priority: 0,
    description: "Multicolor bored mokey",
    fileSize: 137658,
    listed: true,
    listedOnchain: true,
    verified: false,
    image:
      "https://ipfs.infura.io/ipfs/QmQsH4aNapeAhLHvwaiACkj2q8LimvYYMsPogv3sFZeD83",
    url: "https://ipfs.infura.io/ipfs/QmQsH4aNapeAhLHvwaiACkj2q8LimvYYMsPogv3sFZeD83",
    urlCompressed:
      "https://ipfs.infura.io/ipfs/QmQsH4aNapeAhLHvwaiACkj2q8LimvYYMsPogv3sFZeD83",
    urlThumbnail:
      "https://ipfs.infura.io/ipfs/QmQsH4aNapeAhLHvwaiACkj2q8LimvYYMsPogv3sFZeD83",
    price: 0.5,
    storageFee: 0.0001,
    storageFeeTransaction:
      "0xa5fd3d040e39891d104e1dcf1fe6a08268751db272a3fa66341086f78336c96c",
    fileType: "image/jpeg",
    isVideo: false,
    active: true,
    createdAt: "2022-07-13T19:18:36.000Z",
    updatedAt: "2022-07-13T19:32:35.020Z",
    owner: {
      id: "2",
      walletAddress: "0xdBc8997C1273bD8bc5af15f16df26C4FA03c0852",
      username: "Jonathan_z001",
      usernameLowercase: "jonathan_z001",
      avatarUrl:
        "https://ipfs.infura.io/ipfs/QmTu1R9BCnLMvQMxTG3Hs5Fj9SV8kwtkc4Besj6GLwKKvz",
      avatarUrlThumbnail: null,
      avatarUrlCompressed: null,
      coverUrl:
        "https://ipfs.infura.io/ipfs/QmeLDaSeBp71RyKoe37FbYTuVHMCiDHAyKuSNGsuvTH5oj",
      coverThumbnailUrl:
        "https://ipfs.infura.io/ipfs/QmeLDaSeBp71RyKoe37FbYTuVHMCiDHAyKuSNGsuvTH5oj",
      userBio: "NFT Creator",
      banned: false,
      verified: false,
      active: true,
      salesCount: 0,
      buysCount: 0,
      buysTotalAmount: 0,
      notAllowedToMint: false,
      nftsCount: 6,
      nftsOwnCount: 0,
      salesTotalAmount: 0,
      createdAt: "2022-06-07T12:08:34.944Z",
      updatedAt: "2022-07-13T19:32:35.024Z",
    },
  };

  return (
    <div className="h-fit dark:bg-darkPrimary transition-all pb-10">
      <Head>
        <title>{nft.name}</title>
        <meta name="description" content={nft.description} />
        <meta property="og:image" content={nft.url} />
        <meta property="og:image:type" content="image/*" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={nft.description} />
      </Head>
      <NftDetailsPage nft={nft} />
    </div>
  );
};

// export const getServerSideProps = async (context: {
//   params: { slug: any };
//   req: any;
// }) => {
//   const { slug } = context.params;

//   try {
//   } catch (err) {
//     console.log(err);
//   }
// };

export default NftDetails;
