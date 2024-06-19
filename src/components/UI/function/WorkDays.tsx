import React from "react";
import { styled } from "@mui/material";
import { Checkbox } from "@mui/material";
import { HourArray } from "../../../utils/constant";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Array = [
  { week: "Понедеьник", isWork: true },
  { week: "Вторник", isWork: false },
  { week: "Среда", isWork: true },
  { week: "Четверг", isWork: true },
  { week: "Пятница", isWork: true },
  { week: "Субота", isWork: false },
];

const WorkDays: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100%", margin: "0px 50px" }}>
        {Array.slice(0, 3).map((obj, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox
              {...label}
              checked={obj.isWork}
              sx={{
                color: "#53a8bb",
                "&.Mui-checked": {
                  color: "#53a8bb",
                },
              }}
            />
            <p>{obj.week}</p>
            <TimeBlockBox>
              <TimeBlock>
                {HourArray.map((obj) => (
                  <option key={obj.id}>{obj.time}</option>
                ))}
              </TimeBlock>
              <TimeBlock>
                {HourArray.map((obj) => (
                  <option key={obj.id}>{obj.time}</option>
                ))}
              </TimeBlock>
            </TimeBlockBox>
          </div>
        ))}
      </div>
      <div style={{ width: "100%", margin: "0px 50px" }}>
        {Array.slice(3, 6).map((obj, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox
              {...label}
              checked={obj.isWork}
              sx={{
                color: "#53a8bb",
                "&.Mui-checked": {
                  color: "#53a8bb",
                },
              }}
            />
            <p>{obj.week}</p>
            <TimeBlockBox>
              <TimeBlock>
                {HourArray.map((obj) => (
                  <option key={obj.id}>{obj.time}</option>
                ))}
              </TimeBlock>
              <TimeBlock>
                {HourArray.map((obj) => (
                  <option key={obj.id}>{obj.time}</option>
                ))}
              </TimeBlock>
            </TimeBlockBox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDays;

const TimeBlockBox = styled("div")({
  display: "flex",
  gap: "20px",
});
const TimeBlock = styled("select")({
  backgroundColor: "#c2f2fc",
  padding: "1px 10px",
  borderRadius: "4px",
  border: ".5px solid #a5ced6",
});
