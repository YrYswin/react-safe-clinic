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

interface CustomTableProps {
  title: string;
  addItem: () => void;
  editItem: (e: number) => void;
  deleteItem: (e: number) => void;
  infoItem: (e: number) => void;
  branches?: BranchState[];
  services?: ServiceState[];
  doctors?: DoctorsArrayState[];
  patients?: PatientArrayState[];
}

const TableUI: React.FC<CustomTableProps> = ({
  addItem,
  editItem,
  deleteItem,
  infoItem,
  title,
  branches,
  services,
  doctors,
  patients,
}) => {
  const branchTable = branches && (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead>Название</TableCellHead>
          <TableCellHead>Адрес</TableCellHead>
          <TableCellHead>Директор</TableCellHead>
          <TableCellHead style={{ width: "100px", textAlign: "center" }}>
            Действия
          </TableCellHead>
        </TableRow>
      </TableHead>

      <TableBody>
        {branches.map(({ name, director, id, address }) => (
          <StyledTableRowBody key={id}>
            <StyledTableCellBody onClick={() => infoItem(id)}>
              {name}
            </StyledTableCellBody>
            <StyledTableCellBody>{address}</StyledTableCellBody>
            <StyledTableCellBody>{director}</StyledTableCellBody>
            <StyledTableCellBtn>
              <button onClick={() => editItem(id)}>
                <img src="/icon/edit.svg" alt="action" />
              </button>
              <button onClick={() => deleteItem(id)}>
                <img src="/icon/delete.svg" alt="action" />
              </button>
            </StyledTableCellBtn>
          </StyledTableRowBody>
        ))}
      </TableBody>
    </Table>
  );
  const serivicesTable = services && (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead>Название</TableCellHead>
          <TableCellHead>Описание</TableCellHead>
          <TableCellHead>Стоимость</TableCellHead>
          <TableCellHead style={{ width: "100px", textAlign: "center" }}>
            Действия
          </TableCellHead>
        </TableRow>
      </TableHead>

      <TableBody>
        {services.map(({ photo, name, description, id, price }) => (
          <StyledTableRowBody key={id}>
            <StyledTableCellBody onClick={() => infoItem(id)}>
              <ItemImage src={photo} />
              {name}
            </StyledTableCellBody>
            <StyledTableCellBody>
              <Description>{description}</Description>
            </StyledTableCellBody>
            <StyledTableCellBody>{price}</StyledTableCellBody>
            <StyledTableCellBtn>
              <button onClick={() => editItem(id)}>
                <img src="/icon/edit.svg" alt="action" />
              </button>
              <button onClick={() => deleteItem(id)}>
                <img src="/icon/delete.svg" alt="action" />
              </button>
            </StyledTableCellBtn>
          </StyledTableRowBody>
        ))}
      </TableBody>
    </Table>
  );
  const doctorsTable = doctors && (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead>Название</TableCellHead>
          <TableCellHead>Адрес</TableCellHead>
          <TableCellHead>Директор</TableCellHead>
          <TableCellHead style={{ width: "100px", textAlign: "center" }}>
            Действия
          </TableCellHead>
        </TableRow>
      </TableHead>

      <TableBody>
        {doctors.map(({ name, photo, id, email, client }) => (
          <StyledTableRowBody key={id}>
            <StyledTableCellBody onClick={() => infoItem(id)}>
              <ItemImage src={photo} />
              {name}
            </StyledTableCellBody>
            <StyledTableCellBody>{email}</StyledTableCellBody>
            <StyledTableCellBody>{client}</StyledTableCellBody>
            <StyledTableCellBtn>
              <button onClick={() => editItem(id)}>
                <img src="/icon/edit.svg" alt="action" />
              </button>
              <button onClick={() => deleteItem(id)}>
                <img src="/icon/delete.svg" alt="action" />
              </button>
            </StyledTableCellBtn>
          </StyledTableRowBody>
        ))}
      </TableBody>
    </Table>
  );
  const patientsTable = patients && (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead>Название</TableCellHead>
          <TableCellHead>Адрес</TableCellHead>
          <TableCellHead>Директор</TableCellHead>
          <TableCellHead style={{ width: "100px", textAlign: "center" }}>
            Действия
          </TableCellHead>
        </TableRow>
      </TableHead>

      <TableBody>
        {patients.map(({ full_name, date_of_appointment, id, address }) => (
          <StyledTableRowBody key={id}>
            <StyledTableCellBody onClick={() => infoItem(id)}>
              {full_name}
            </StyledTableCellBody>
            <StyledTableCellBody>{address}</StyledTableCellBody>
            <StyledTableCellBody>{date_of_appointment}</StyledTableCellBody>
            <StyledTableCellBtn>
              <button onClick={() => editItem(id)}>
                <img src="/icon/edit.svg" alt="action" />
              </button>
              <button onClick={() => deleteItem(id)}>
                <img src="/icon/delete.svg" alt="action" />
              </button>
            </StyledTableCellBtn>
          </StyledTableRowBody>
        ))}
      </TableBody>
    </Table>
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
        {branches && branchTable}
        {services && serivicesTable}
        {doctors && doctorsTable}
        {patients && patientsTable}
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
