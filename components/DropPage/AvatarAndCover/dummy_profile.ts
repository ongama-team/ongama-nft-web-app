import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
import { UserAccount } from "@lib/models/UserAccount";
const { staticImages } = dummy_data;

const dummy_profile = {
  user: <UserAccount>{
    id: "user_id",
    walletAddress: "0x0jdsj87573456uyfgsdjf8o375628v8389d",
    username: "John Doe",
    usernameLowercase: "john doe",
    avatarUrlThumbnail: "",
    avatarUrl: staticImages[1].url,
    coverUrl: staticImages[0].url,
    coverThumbnailUrl: "",
    userBio: "Nft creator",
    banned: false,
    verified: true,
    active: true,
    salesCount: 2,
    buysCount: 4,
    buysTotalAmount: 43,
    notAllowedToMint: false,
    nftsCount: 23,
    nftsOwnCount: 24,
  },
  stat: [
    {
      title: "Highest Sale",
      value: 1100000,
      type: "price",
    },
    {
      title: "Floor price",
      value: 29400,
      type: "price",
    },
    {
      title: "Market Cap",
      value: 293800000,
      type: "price",
    },
    {
      title: "Items",
      value: 10000,
      type: "number",
    },
    {
      title: "Owner",
      value: 5000,
      type: "number",
    },
    {
      title: "Total Volume",
      value: 413300000,
      type: "price",
    },
  ],
};

export default dummy_profile;
