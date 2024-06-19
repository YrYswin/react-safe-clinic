import React from "react";
import { styled } from "styled-components";

import { HourArray, weekArray } from "../../../utils/constant";
import SelectFilter from "../../UI/function/SelectFilter";
import { useAppDispatch } from "../../../store/store";
import { getPatients } from "../../../store/patientsSlice/action";
import { GenderState } from "../../../utils/types";
import { useSelector } from "react-redux";
import { selectPatients } from "../../../store/patientsSlice/slice";

const WeekCalendarTable: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getPatients({ genderPat: GenderState.ALL }));
  }, [dispatch]);
  const { items } = useSelector(selectPatients);

  const [currentWeekStart, setCurrentWeekStart] = React.useState<Date>(
    getMonday(new Date())
  );

  function getMonday(date: Date): Date {
    date = new Date(date);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  }

  function updateWeek(offset: number) {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + offset);
    setCurrentWeekStart(newWeekStart);
  }

  const monday = currentWeekStart;
  const saturday = new Date(monday);
  saturday.setDate(monday.getDate() + 5);

  const setToMidnight = (date: Date): Date => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const mondayMidnight = setToMidnight(new Date(monday));
  const saturdayMidnight = setToMidnight(new Date(saturday));

  const nowWeek = items
    .filter((x) => {
      const clientDate = setToMidnight(new Date(x.date_of_appointment));
      return clientDate >= mondayMidnight && clientDate <= saturdayMidnight;
    })
    .map((client) => {
      const newClient = { ...client };
      const clientDate = new Date(newClient.date_of_appointment);
      const day = clientDate.getDay();
      newClient.weekDay = day === 0 ? 7 : day;
      return newClient;
    })
    .map((client) => {
      const times = client.time_of_appointment?.split("-");
      const newClient = { ...client };
      newClient.timeHourStart = Number(
        HourArray.find((x) => x.time === times?.[0])?.id
      );
      newClient.timeHourEnd =
        Number(HourArray.find((x) => x.time === times?.[1])?.id) - 1;
      return newClient;
    });
  return (
    <div>
      <SelectFilter
        width={27}
        onClickNext={() => updateWeek(7)}
        onClickPrev={() => updateWeek(-7)}
        dateTitle={`${formatDate(monday)} - ${formatDate(saturday)}`}
      />

      <CalendarContainer style={{ margin: "7px 0px 7px 50px" }}>
        <HourTitle></HourTitle>

        {weekArray.map((obj, index) => (
          <ItemBox style={{ textAlign: "center" }} key={index}>
            {obj}
          </ItemBox>
        ))}
      </CalendarContainer>

      <CalendarContainer>
        <div>
          {HourArray.map((hour) => (
            <HourTitle key={hour.id}>{hour.time}</HourTitle>
          ))}
        </div>

        <ContentStyle>
          {[...new Array(6)].map((obj, index) => (
            <WeekColumn key={index}>
              <>
                {obj}
                {HourArray.map((hour) => (
                  <ItemBox key={hour.id}>
                    {nowWeek.find(
                      (client) =>
                        client.weekDay === index + 1 &&
                        client.timeHourStart === hour.id
                    )?.full_name ? (
                      <>
                        {Number(
                          nowWeek.find(
                            (client) =>
                              client.weekDay === index + 1 &&
                              client.timeHourStart === hour.id
                          )?.timeHourStart
                        ) +
                          1 ===
                        Number(
                          nowWeek.find(
                            (client) =>
                              client.weekDay === index + 1 &&
                              client.timeHourStart === hour.id
                          )?.timeHourEnd
                        ) ? (
                          <ClientItem>
                            <Double>
                              <img src="/icon/clock.svg" alt="clock" />
                              <ClientItemTitle>
                                <span style={{ fontWeight: "600" }}>
                                  {
                                    nowWeek.find(
                                      (client) =>
                                        client.weekDay === index + 1 &&
                                        client.timeHourStart === hour.id
                                    )?.time_of_appointment
                                  }
                                </span>
                                <h1>
                                  {
                                    nowWeek.find(
                                      (client) =>
                                        client.weekDay === index + 1 &&
                                        client.timeHourStart === hour.id
                                    )?.full_name
                                  }
                                </h1>
                              </ClientItemTitle>
                              <View src="/icon/viewIcon.svg" alt="view" />
                            </Double>
                          </ClientItem>
                        ) : (
                          <ClientItem>
                            <Single>
                              <img
                                style={{ width: "10px", height: "10px" }}
                                src="/icon/clock.svg"
                                alt="clock"
                              />
                              <h1>
                                {
                                  nowWeek.find(
                                    (client) =>
                                      client.weekDay === index + 1 &&
                                      client.timeHourStart === hour.id
                                  )?.full_name
                                }
                              </h1>
                              <View src="/icon/viewIcon.svg" alt="view" />
                            </Single>
                          </ClientItem>
                        )}
                      </>
                    ) : (
                      <EmptyItem></EmptyItem>
                    )}
                  </ItemBox>
                ))}
              </>
            </WeekColumn>
          ))}
        </ContentStyle>
      </CalendarContainer>
    </div>
  );
};

export default WeekCalendarTable;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HourTitle = styled.div`
  height: 20px;
  font-size: 13px;
  display: flex;
  align-items: start;
`;
const ContentStyle = styled.div`
  width: 95%;
  display: flex;
  flex-direction: columns;
`;
const WeekColumn = styled.div`
  width: 100%;
`;

const ItemBox = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 4px;
`;
const EmptyItem = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid rgb(0, 194, 255);
  border-radius: 4px;
`;

const ClientItem = styled.div`
  width: 100%;
  background-color: rgb(179, 230, 241);
  font-size: 12px;
  border-radius: 4px;
  position: relative;
`;
const Double = styled.div`
  border-radius: 4px;
  border: 1px solid #ffffff;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  positon: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 10px;
`;
const Single = styled.div`
  border-radius: 4px;
  border: 2px solid #ffffff;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ClientItemTitle = styled.div`
  text-align: center;
`;
const View = styled.img`
  position: absolute;
  top: 3px;
  right: 5px;
`;
