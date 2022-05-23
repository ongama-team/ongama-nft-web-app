import { dummy_data } from "@components/modules/__noAuth/Presentation/dummy_data";
const { staticImages } = dummy_data;

const dummy_profile = {
  avatar: staticImages[1].url,
  profileImage: staticImages[0].url,
  name: staticImages[0].name,
  address: "0x0jdsj87573456uyfgsdjf8o375628v8389d",
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
