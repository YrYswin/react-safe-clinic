import React from "react";
import { styled } from "@mui/material";

import { Time_POINT } from "../../../utils/constant";

interface RowRadioButtonsGroupProps {
  setValue: (e: string) => void;
  value: string;
}

const RowRadioButtonsGroup: React.FC<RowRadioButtonsGroupProps> = ({
  setValue,
  value,
}) => {
  return (
    <Container>
      {Time_POINT.map((time, i) => (
        <TimeBox
          key={i}
          onClick={() => setValue(time)}
          style={{ backgroundColor: time === value ? "#9ac1c9" : "" }}
        >
          {time}
        </TimeBox>
      ))}
    </Container>
  );
};

export default RowRadioButtonsGroup;

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  rowGap: "10px",
  columnGap: "20px",
  margin: "auto",
});

const TimeBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "2px 15px",
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "#c2f2fc",
  cursor: "pointer",
});
