import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

dayjs.locale("ru");

interface DateCalendarProps {
  onDateChange: (date: dayjs.Dayjs | null) => void;
}

const DateCalendar: React.FC<DateCalendarProps> = ({ onDateChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "MobileDatePicker",
          "DesktopDatePicker",
          "StaticDatePicker",
        ]}
      >
        <DemoItem>
          <DatePicker
            defaultValue={dayjs()}
            onChange={onDateChange}
            format="DD-MMMM YYYY год"
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateCalendar;
