import React from "react";
import DropPage from "../modules/_noAuth/DropPage";
import Header from "../modules/_noAuth/Header";
import Presentation from "../modules/_noAuth/Presentation";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Presentation />
      <DropPage />
    </>
  );
};

export default LandingPage;
