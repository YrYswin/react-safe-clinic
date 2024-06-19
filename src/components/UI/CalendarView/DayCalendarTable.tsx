import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import { HourArray } from "../../../utils/constant";
import SelectFilter from "../../UI/function/SelectFilter";
import ViewMenu from "../../UI/design/ViewMenu";
import { InfoPatient } from "../../admin/patient";
import DeleteModal from "../../admin/DeleteModal";
import { useAppDispatch } from "../../../store/store";
import { getPatients } from "../../../store/patientsSlice/action";
import { GenderState } from "../../../utils/types";
import { selectPatients } from "../../../store/patientsSlice/slice";

const DayCalendarTable: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState(dayjs().startOf("day"));
  const [patinetId, setPatinetId] = React.useState<number | undefined>();
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const closeInfo = () => {
    setPatinetId(undefined);
  };

  React.useEffect(() => {
    dispatch(getPatients({ genderPat: GenderState.ALL }));
  }, [dispatch]);
  const { items } = useSelector(selectPatients);

  const handlePrevDay = () => {
    setCurrentDate(currentDate.subtract(1, "day"));
  };

  const handleNextDay = () => {
    setCurrentDate(currentDate.add(1, "day"));
  };

  const todayClients = items
    .filter((x) => {
      const clientDate = dayjs(x.date_of_appointment).startOf("day");
      return clientDate.isSame(currentDate, "day");
    })
    .map((client) => {
      const times = client.time_of_appointment?.split("-");
      const newClient = { ...client };
      newClient.timeHourStart = Number(
        HourArray.find((x) => x.time === times?.[0])?.id
      );
      console.log(newClient.timeHourStart);
      newClient.timeHourEnd =
        Number(HourArray.find((x) => x.time === times?.[1])?.id) - 1;
      return newClient;
    });

  return (
    <>
      <div style={{ padding: "0 20px" }}>
        <SelectFilter
          width={28}
          onClickPrev={handlePrevDay}
          onClickNext={handleNextDay}
          dateTitle={currentDate.format("DD-MMMM YYYY")}
        />

        {HourArray.map((hour) => (
          <RowHour key={hour.id}>
            <HourTitle>{hour.time}</HourTitle>
            <ItemBox key={hour.id}>
              {todayClients.find((client) => client.timeHourStart === hour.id)
                ?.full_name ? (
                <>
                  {Number(
                    todayClients.find(
                      (client) => client.timeHourStart === hour.id
                    )?.timeHourStart
                  ) +
                    1 ===
                  Number(
                    todayClients.find(
                      (client) => client.timeHourStart === hour.id
                    )?.timeHourEnd
                  ) ? (
                    <ClientItem>
                      <Double>
                        <ClientItemTitle>
                          <img src="/icon/clock.svg" alt="clock" />
                          <ClientName>
                            <span style={{ fontWeight: "600" }}>
                              {
                                todayClients.find(
                                  (client) => client.timeHourStart === hour.id
                                )?.time_of_appointment
                              }
                            </span>
                            <h1>
                              {
                                todayClients.find(
                                  (client) => client.timeHourStart === hour.id
                                )?.full_name
                              }
                            </h1>
                          </ClientName>
                        </ClientItemTitle>
                        <ViewMenu
                          small={false}
                          opneInfo={() =>
                            setPatinetId(
                              todayClients.find(
                                (x) => x.timeHourStart === hour.id
                              )?.id
                            )
                          }
                          deleteItem={() => setDeleteModal(true)}
                        />
                      </Double>
                    </ClientItem>
                  ) : (
                    <ClientItem>
                      <Single>
                        <ClientItemTitle>
                          <img
                            style={{ width: "10px", height: "10px" }}
                            src="/icon/clock.svg"
                            alt="clock"
                          />
                          <ClientName>
                            <h1>
                              {
                                todayClients.find(
                                  (client) => client.timeHourStart === hour.id
                                )?.full_name
                              }
                            </h1>
                          </ClientName>
                        </ClientItemTitle>
                        <ViewMenu
                          small={true}
                          opneInfo={() =>
                            setPatinetId(
                              todayClients.find(
                                (x) => x.timeHourStart === hour.id
                              )?.id
                            )
                          }
                          deleteItem={() => setDeleteModal(true)}
                        />
                      </Single>
                    </ClientItem>
                  )}
                </>
              ) : (
                <EmptyItem></EmptyItem>
              )}
            </ItemBox>
          </RowHour>
        ))}
      </div>

      {patinetId && <InfoPatient onClose={closeInfo} dataId={patinetId} />}
      {deleteModal && (
        <DeleteModal
          updateTable={() => console.log(false)}
          onClose={(e) => setDeleteModal(Boolean(e.length))}
          dataId={patinetId}
          deleteType="patient"
        />
      )}
    </>
  );
};

export default DayCalendarTable;

const ItemBox = styled("div")({
  width: "100%",
  height: "21px",
  borderRadius: " 4px",
});
const RowHour = styled("div")({
  display: "flex",
});

const HourTitle = styled("div")({
  width: "50px",
  height: "21px",
  fontSize: "13px",
  display: "flex",
  alignItems: "start",
});

const ClientItem = styled("div")({
  width: "100%",
  backgroundColor: "rgb(179, 230, 241)",
  fontSize: "12px",
  borderRadius: "4px",
  position: "relative",
});
const Double = styled("div")({
  borderRadius: "4px",
  border: "1px solid #ffffff",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
  gap: "15px",
  alignItems: "center",
  positon: "absolute",
  top: "0",
  left: "0",
  zIndex: "99",
  padding: "0 70px",
});
const Single = styled("div")({
  borderRadius: "4px",
  border: "2px solid #ffffff",
  height: "21px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 70px",
  gap: "20px",
});
const EmptyItem = styled("div")({
  width: "100%",
  height: "21px",
  border: "1px solid rgb(0, 194, 255)",
  borderRadius: "4px",
});

const ClientItemTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
const ClientName = styled("div")({
  textAlign: "center",
});
