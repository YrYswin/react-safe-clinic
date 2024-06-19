import React from "react";
import { styled } from "styled-components";

import Header from "../components/admin/Header";
import SelectCalendar from "../components/UI/function/SelectCalendar";
import WeekCalendarTable from "../components/UI/CalendarView/WeekCalendarTable";
import MonthCalendarTable from "../components/UI/CalendarView/MonthCalendarTable";
import DayCalendarTable from "../components/UI/CalendarView/DayCalendarTable";

export const CalendarPage: React.FC = () => {
  const [filterState, setFilterState] = React.useState<string>("week");
  return (
    <>
      <Header isNotSearch={true} />
      <Container>
        <div>
          <SelectCalendar
            filterState={filterState}
            setFilterState={setFilterState}
          />
          {filterState === "month" && <MonthCalendarTable />}
          {filterState === "week" && <WeekCalendarTable />}
          {filterState === "day" && <DayCalendarTable />}
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  margin-bottom: 20px;
  background-color: white;
`;
