import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { BranchState } from "../../store/branchesSlice/types";
import { ServiceState } from "../../store/serviceSlice/types";
import { DoctorsArrayState } from "../../store/doctorsSlice/types";
import { PatientArrayState } from "../../store/patientsSlice/types";

import ButtonUI from "./function/ButtonUI";

type DataState =
  | BranchState
  | ServiceState
  | DoctorsArrayState
  | PatientArrayState;

interface CustomTableProps {
  data: DataState[];
  title: string;
  addItem: () => void;
  editItem: (e: number) => void;
  deleteItem: (e: number) => void;
  infoItem: (e: number) => void;
}

const TableUI: React.FC<CustomTableProps> = ({
  data,
  addItem,
  editItem,
  deleteItem,
  infoItem,
  title,
}) => {
  const keyMap: { [key: string]: string } = {
    name: "Название",
    address: "Адрес",
    director: "Директор",
    description: "Описание",
    price: "Стоимость",
    email: "Email",
    tag: "Теги",
    client: "Клиенты",
    full_name: "Имя",
    date_of_appointment: "Дата посещения",
    phone_number: "Телефон",
  };

  const allKeys = Array.from(
    new Set(
      data.flatMap((item) =>
        Object.keys(item).filter(
          (key) =>
            key !== "id" &&
            key !== "category" &&
            key !== "photo" &&
            key !== "time_of_appointment"
        )
      )
    )
  );

  return (
    <>
      <TableTitle>
        <h1>{title}</h1>
        <ButtonUI
          click={addItem}
          title={"Добавить"}
          customStyle={{
            backgroundColor: "#53a8bb",
            color: "white",
            margin: 0,
          }}
        />
      </TableTitle>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {allKeys.map((key) => (
                <TableCellHead>{keyMap[key] || key}</TableCellHead>
              ))}
              <TableCellHead style={{ width: "100px", textAlign: "center" }}>
                Действия
              </TableCellHead>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <StyledTableRowBody key={index}>
                {allKeys.map((key) => (
                  <StyledTableCellBody key={key}>
                    {key === "name" && (row as ServiceState).photo ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ItemImage
                          src={
                            (row as ServiceState).photo ||
                            (row as DoctorsArrayState).photo ||
                            "/image/Avatar.jpg"
                          }
                          alt="Фото"
                          onClick={() => infoItem(row.id)}
                        />
                        {row[key as keyof DataState]}
                      </div>
                    ) : key === "full_name" ? (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => infoItem(row.id)}
                      >
                        {String(row[key as keyof DataState])?.substring(0, 70) +
                          "..."}
                      </p>
                    ) : key === "description" ? (
                      <Description>
                        {String(row[key as keyof DataState])?.substring(0, 70) +
                          "..."}
                      </Description>
                    ) : (
                      row[key as keyof DataState]?.toString() || "-"
                    )}
                  </StyledTableCellBody>
                ))}
                <StyledTableCellBtn>
                  <button onClick={() => editItem(row.id)}>
                    <img src="/icon/edit.svg" alt="action" />
                  </button>
                  <button onClick={() => deleteItem(row.id)}>
                    <img src="/icon/delete.svg" alt="action" />
                  </button>
                </StyledTableCellBtn>
              </StyledTableRowBody>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableUI;

const TableTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",

  h1: {
    fontSize: "20px",
  },
});

const TableCellHead = styled(TableCell)({
  fontSize: "20px",
});

const StyledTableRowBody = styled(TableRow)({
  alignItems: "center",
});
const ItemImage = styled("img")({
  width: 70,
  height: 70,
  borderRadius: "10px",
  marginRight: 8,
  cursor: "pointer",
});
const StyledTableCellBody = styled(TableCell)({
  borderBottom: "none",
});
const StyledTableCellBtn = styled(TableCell)({
  display: "flex",
  borderBottom: "none",
  justifyContent: "center",
  gap: "10px",
  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  img: {
    transition: "all .1s ease-in",
    width: "30px",
    ":hover": {
      transform: "scale(1.3)",
      filter: "drop-shadow(0 0 10px rgb(0, 242, 213))",
    },
  },
});
const Description = styled("span")({
  maxWidth: 200,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  whiteSpace: "normal",
});
