import ProfileContainer from "@components/modules/__secured/Profile";
import React, { useEffect } from "react";
import cookieParser from "@lib/cookieParser";
import { backendApiService } from "@lib/services/BackendApiService";
import UploadFileProcessing from "@components/modules/__modules__/Card/UploadFileProcessing";
import Head from "next/head";

function Profile({ user, loaded }) {
  if (!user && !loaded) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-2xl font-bold">Failed To Load the page</h1>
        <button
          onClick={() => {
            if (typeof window !== "undefined") window.location.reload();
          }}
          className="px-5 py-2 bg-blue-500 hover:blue-600 transition-all font-bold text-white"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{user?.username || "Profile"}</title>
        <meta name="description" content={user?.userBio} />
        <meta property="og:image" content={user?.avatarUrl || ""} />
        <meta property="og:image:type" content="image/*" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={user?.userBio} />
      </Head>
      <UploadFileProcessing isProcessing={!user}>
        <ProfileContainer searchedUserProfile={user} />
      </UploadFileProcessing>
    </>
  );
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
  try {
    const [user] = await Promise.all([
      backendApiService.findAccountWhereAddressOrUsername(slug, headers),
    ]);

    return {
      props: {
        user: user,
        loaded: true,
      },
    };
  } catch (err) {
    return {
      props: {
        user: null,
        loaded: false,
      },
    };
  }
}

export default Profile;
