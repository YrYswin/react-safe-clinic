import React from "react";
import Slider from "react-slick";
import { styled } from "@mui/material";
import ButtonUI from "../../UI/function/ButtonUI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DantistState, bestDantistList } from "../../../utils/homeItems";

interface settingSlide {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
}

const BestDantistList: React.FC = () => {
  const Carousel = () => {
    const settings: settingSlide = {
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
    };
    return (
      <DantistsList {...settings}>
        {bestDantistList.map((obj, i) => (
          <DantistItem
            key={i}
            onClick={() => setActiveDoctor(obj)}
            active={obj.id === activeDoctor.id}
          >
            <ImageBox>
              <img src={obj.image} alt="doctor" />
            </ImageBox>
            <span>{obj.name}</span>
          </DantistItem>
        ))}
      </DantistsList>
    );
  };

  const [activeDoctor, setActiveDoctor] = React.useState<DantistState>(
    bestDantistList[0]
  );

  return (
    <Container>
      <TitleContainer>
        <h1>Квалифицированные стомотологи</h1>
        <p>Помогут сохранить и вернуть здоровье вашим зубам</p>
      </TitleContainer>

      <Carousel />

      <DantisInfo>
        <ImageContainer>
          <img src={activeDoctor.image} alt="doctor" />
        </ImageContainer>
        <InfoContainer>
          <h1>{activeDoctor.name}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>{activeDoctor.tag}</span>
              <p>Опыт работы {activeDoctor.workExperience} год</p>
            </div>
            <ButtonUI title="Записаться" customStyle={styleBtn} />
          </div>

          <p>{activeDoctor.aboutMe}</p>
          <p>{activeDoctor.education}</p>

          <CommentContainer>
            <h5>Отзывы</h5>
            {activeDoctor.feedBackList.slice(0, 1).map((obj, i) => (
              <div key={i}>
                <div>
                  <img src="./image/defaultImage.svg" alt="comment" />
                  <p>{obj.name}</p>
                </div>

                <div>{obj.comment}</div>
              </div>
            ))}
          </CommentContainer>
        </InfoContainer>
      </DantisInfo>
    </Container>
  );
};

export default BestDantistList;

const Container = styled("div")({
  width: "1200px",
  margin: "70px auto",
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  padding: "20px",
});

const TitleContainer = styled("div")({
  h1: {
    fontSize: "22px",
    fontWeight: "600",
  },
  p: {
    fontSize: "18px",
    fontWeight: "600",
  },
});

const DantistsList = styled(Slider)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 30px",

  ".slick-slide": {
    padding: "10px",
  },

  ".slick-dots": {
    bottom: "10px",
    "& li button:before": {
      color: "red",
      display: "none",
    },
  },

  ".slick-prev, .slick-next": {
    width: "40px",
    height: "40px",
    zIndex: 1,
    "&:before": {
      fontSize: "30px",
      color: "gray",
    },
  },
});

const DantistItem = styled("div")<{ active: boolean }>(({ active }) => ({
  width: "200px",
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: active && "1px solid gray",
    borderRadius: "10px",
  },

  span: {
    textAlign: "center",
  },
}));

const ImageBox = styled("div")({
  width: "200px",
  height: "200px",
  overflow: "hidden",
  img: {
    width: "100%",
  },
});

const DantisInfo = styled("div")({
  display: "flex",
  padding: "0 30px",
});
const ImageContainer = styled("div")({
  width: "1000px",
  height: "70vh",
  display: "flex",
  alignItems: "center",

  img: {
    width: "100%",
  },
});

const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "22px",
    fontWeight: "600",
  },
  "span, p": {
    fontSize: "18px",
    fontWeight: "600",
  },
  "&>p": {
    margin: "30px auto",
  },
});

const CommentContainer = styled("div")({
  "&>div": {
    display: "flex",
    gap: "20px",

    "&>div": {
      margin: "5px 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

const styleBtn: React.CSSProperties = {
  backgroundColor: "#53a8bb",
  color: "white",
};
