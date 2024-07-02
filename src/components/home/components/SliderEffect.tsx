import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

interface settingsState {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  dots: boolean;
}

interface SliderProps {
  items: string[];
  title: string;
}

const SliderEffect: React.FC<SliderProps> = ({ items, title }) => {
  const settings: settingsState = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };
  return (
    <Container className="slider-container">
      <h1>{title}</h1>
      <SliderStyle {...settings} autoplay>
        {items.map((obj, i) => (
          <ImageItem key={i}>
            <img src={obj} alt="back" />
          </ImageItem>
        ))}
      </SliderStyle>
    </Container>
  );
};

export default SliderEffect;

const Container = styled("div")({
  margin: "50px auto",
  width: "1200px",

  "&>h1": {
    fontSize: "26px",
    fontWeight: "600",
    color: "#011738",
    margin: "20px auto",
  },
});

const SliderStyle = styled(Slider)({
  ".slick-slide": {
    padding: "20px ",
  },

  ".slick-dots": {
    "& li button:before": {
      color: "#011738",
      fontSize: "15px",
    },
    ".slick-active button:before": {
      fontSize: "20px",
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

const ImageItem = styled("div")({
  borderRadius: "25px",
  transition: "all .2s ease-in-out",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 5px rgb(20,20,20)",
  },

  "&>img": {
    borderRadius: "25px",
    width: "100%",
  },
});
