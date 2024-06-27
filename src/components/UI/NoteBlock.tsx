import { styled } from "@mui/material";
import React from "react";

interface NoteBlockProps {
  children: React.ReactNode;
  date: string;
}

const NoteBlock: React.FC<NoteBlockProps> = ({ date, children }) => {
  return (
    <Container>
      <h5>{date}</h5>
      <div>{children}</div>
    </Container>
  );
};

export default NoteBlock;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",

  h5: {
    display: "block",
    textAlign: "center",
    fontSize: "18px",
  },

  "&>div": {
    backgroundColor: "rgb(232, 246, 253)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "10px",
    padding: "15px 0px",

    p: {
      padding: "0px 25px",
      width: "70%",
      letterSpacing: "0.3px",
      lineHeight: "1.3",

      b: {
        fontWeight: "600",
      },
    },

    span: {
      display: "block",
      textAlign: "end",
      padding: "0px 25px",
      fontSize: "16px",
    },
  },
});
