import React from "react";
import { styled } from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface SelectCalendar {
  filterState: string;
  setFilterState: (e: string) => void;
}

const SelectCalendar: React.FC<SelectCalendar> = ({
  filterState,
  setFilterState,
}) => {
  return (
    <CalendarHead>
      <HeadTitle>
        <TitleStyle>Календарь</TitleStyle>

        <FilterDate>
          <FormControl sx={{ m: 1, minWidth: 120, margin: "0px" }} size="small">
            <Select
              value={filterState}
              onChange={(e) => setFilterState(e.target.value)}
              displayEmpty
            >
              <MenuItem value={"month"}>На месяц</MenuItem>
              <MenuItem value={"week"}>На неделю</MenuItem>
              <MenuItem value={"day"}>На день</MenuItem>
            </Select>
          </FormControl>
        </FilterDate>
      </HeadTitle>
    </CalendarHead>
  );
};

export default SelectCalendar;

const CalendarHead = styled.div`
  border-bottom: 1px solid rgb(238, 240, 247);
  padding-bottom: 7px;
  margin: 5px;
`;
const HeadTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const TitleStyle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const FilterDate = styled.div`
  position: relative;
  width: 100%;
`;
