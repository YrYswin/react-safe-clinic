import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { styled } from "@mui/material";
import Banner from "../components/home/components/Banner";
import ClinicIs from "../components/home/components/ClinicIs";
import OurService from "../components/home/components/OurService";
import EventPage from "../components/home/components/EventPage";
import BestDantistList from "../components/home/components/BestDantistList";
import SliderEffect from "../components/home/components/SliderEffect";

import { ourClinic } from "../utils/homeItems";
import NewsClinic from "../components/home/components/NewsClinic";
import ConsultationPage from "../components/home/components/ConsultationPage";
import AddressAndContact from "../components/home/components/AddressAndContact";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Components>
        <Banner />
        <ClinicIs />
        <OurService />
        <EventPage />
        <BestDantistList />
        <SliderEffect
          title={"Посмотрите как выглядит наша клиника"}
          items={ourClinic.clinic}
        />
        <SliderEffect
          title={"Так отзываются о нашей работе клиенты"}
          items={ourClinic.feedback}
        />
        <NewsClinic />
        <ConsultationPage />
        <AddressAndContact />
      </Components>

      <Footer />
    </>
  );
};

export default HomePage;

const Components = styled("div")({
  paddingTop: "70px",
});
