import ProfileContainer from "@components/modules/__secured/Profile";
import React from "react";
import cookieParser from "@lib/cookieParser";
import { backendApiService } from "@lib/services/BackendApiService";
import { UserAccount } from "@lib/models/UserAccount";

function Profile(user: { currentUser: UserAccount }) {
  return <ProfileContainer currentUser={user.currentUser} />;
}

export async function getServerSideProps(context: {
  params: { slug: any };
  req: any;
}) {
  const { slug } = context.params;
  const cookies = cookieParser(context?.req);
  const headers = {
    address: cookies._anft_user_address || "",
  };

  const [user] = await Promise.all([
    backendApiService.findAccountWhereAddressOrUsername(slug, headers),
  ]);

  return {
    props: {
      user: user,
    },
  };
}

export default Profile;
