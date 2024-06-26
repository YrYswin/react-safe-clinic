import React from "react";
import { styled } from "@mui/material";

interface SelectFilterProps {
  onClickPrev: (e: number) => void;
  onClickNext: (e: number) => void;
  dateTitle: string;
  width: number;
}
const SelectFilter: React.FC<SelectFilterProps> = ({
  onClickPrev,
  onClickNext,
  dateTitle,
  width,
}) => {
  return (
    <CalendarTitle width={width}>
      <PrevBtn onClick={() => onClickPrev(1)}>
        <img src="/icon/SelectIcon.svg" alt="prev" />
      </PrevBtn>
      <div>{dateTitle}</div>
      <NextBtn onClick={() => onClickNext(1)}>
        <img src="/icon/SelectIcon.svg" alt="next" />
      </NextBtn>
    </CalendarTitle>
  );
};

export default SelectFilter;

const CalendarTitle = styled("div")<{ width: number }>(({ width }) => ({
  width: `${width}cqw`,
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  margin: "10px 20px",
}));
const PrevBtn = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transform: "rotate(180deg)",
  borderRadius: "100%",
  width: "25px",
  height: "25px",
  transition: "all .1s",
  ":hover": {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgb(150,150,150,.5)",
  },
  ":active": {
    boxShadow: "inset 0 0 4px rgb(150,150,150,.5)",
  },
});
const NextBtn = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "100%",
  width: "25px",
  height: "25px",
  transition: "all .1s",
  ":hover": {
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgb(150,150,150,.5)",
  },
  ":active": {
    boxShadow: "inset 0 0 4px rgb(150,150,150,.5)",
  },
});
