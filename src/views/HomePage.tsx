import React from "react";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import { ourClinic } from "../utils/homeItems";

const Header = React.lazy(() => import("../components/home/Header"));
const NewsClinic = React.lazy(
  () => import("../components/home/components/NewsClinic")
);
const ConsultationPage = React.lazy(
  () => import("../components/home/components/ConsultationPage")
);
const AddressAndContact = React.lazy(
  () => import("../components/home/components/AddressAndContact")
);
const Banner = React.lazy(() => import("../components/home/components/Banner"));
const ClinicIs = React.lazy(
  () => import("../components/home/components/ClinicIs")
);
const OurService = React.lazy(
  () => import("../components/home/components/OurService")
);
const EventPage = React.lazy(
  () => import("../components/home/components/EventPage")
);
const BestDantistList = React.lazy(
  () => import("../components/home/components/BestDantistList")
);
const SliderEffect = React.lazy(
  () => import("../components/home/components/SliderEffect")
);
const Footer = React.lazy(() => import("../components/home/Footer"));

const HomePage: React.FC = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>
      <Outlet />

      <Components>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Banner />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ClinicIs />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <OurService />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <EventPage />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <BestDantistList />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <SliderEffect
            title={"Посмотрите как выглядит наша клиника"}
            items={ourClinic.clinic}
          />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <NewsClinic />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <SliderEffect
            title={"Так отзываются о нашей работе клиенты"}
            items={ourClinic.feedback}
          />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ConsultationPage />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AddressAndContact />
        </React.Suspense>
      </Components>

      <Footer />
    </>
  );
};

export default HomePage;

const Components = styled("div")({
  paddingTop: "70px",
});
