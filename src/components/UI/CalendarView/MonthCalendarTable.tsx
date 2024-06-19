import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

import SelectFilter from "../../UI/function/SelectFilter";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

import { weekArray } from "../../../utils/constant";
import { useAppDispatch } from "../../../store/store";
import { getPatients } from "../../../store/patientsSlice/action";
import { GenderState } from "../../../utils/types";
import { selectPatients } from "../../../store/patientsSlice/slice";

const MonthCalendarTable: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState(dayjs());
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const days = [];
  let day = startOfMonth.weekday(0);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPatients({ genderPat: GenderState.ALL }));
  }, [dispatch]);
  const { items } = useSelector(selectPatients);

  while (day.isBefore(startOfMonth)) {
    if (day.weekday() !== 0) {
      days.push(day);
    }
    day = day.add(1, "day");
  }

  day = startOfMonth;
  while (day.isBefore(endOfMonth) || day.isSame(endOfMonth, "day")) {
    if (day.weekday() !== 0) {
      days.push(day);
    }
    day = day.add(1, "day");
  }

  day = endOfMonth.add(1, "day");
  while (days.length % 6 !== 0) {
    if (day.weekday() !== 0) {
      days.push(day);
    }
    day = day.add(1, "day");
  }

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  function abbreviateSecondWord(sentence: string) {
    return sentence.replace(/^(\S+\s)(\S)(\S*)/, "$1$2.");
  }

  const elements = days.map((day, index) => {
    const patients = items
      .filter((client) => dayjs(client.date_of_appointment).isSame(day, "day"))
      .map((client) => client);

    return (
      <Box key={index}>
        <TestTwo
          style={{
            color:
              day.month() !== currentDate.month() ? "rgb(0,0,0,.4)" : "black",
          }}
        >
          <span>{day.date()}</span>
          {patients.length > 0 && (
            <div>
              {patients.slice(0, 3).map((patient, i) => (
                <h1 key={i}>{abbreviateSecondWord(patient.full_name)}</h1>
              ))}
              {patients.length > 3 && (
                <p style={{ fontSize: "10px" }}>
                  и еще {patients.length - 3} пациент(ов)
                </p>
              )}
            </div>
          )}
        </TestTwo>
      </Box>
    );
  });

  return (
    <div style={{ padding: "0 30px" }}>
      <SelectFilter
        width={15}
        onClickNext={handleNextMonth}
        onClickPrev={handlePrevMonth}
        dateTitle={currentDate.format("MMMM YYYY")}
      />

      <CalendarContainer>
        {weekArray.slice(0, 6).map((obj, index) => (
          <ItemBox key={index}>{obj}</ItemBox>
        ))}
      </CalendarContainer>

      <TestOne>{elements}</TestOne>
    </div>
  );
};

export default MonthCalendarTable;

const TestOne = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(6,1fr)",
});

const Box = styled("div")({
  position: "relative",
});
const TestTwo = styled("div")({
  border: "1px solid #00c2ff",
  width: "100%",
  height: "73px",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "white",
  cursor: "default",

  span: {
    position: "absolute",
    top: "0",
    right: "3px",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",

    h1: {
      width: "85%",
      padding: "0 3px",
      fontSize: "10px",
      fontWeight: "600",
      backgroundColor: "#b3e6f1",
      borderRadius: "5px",
    },
  },
});

const CalendarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
const ItemBox = styled("div")({
  width: "100%",
  height: "20px",
  textAlign: "center",
});
