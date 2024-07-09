import React from "react";
import { styled } from "@mui/material";

interface FormInputProps {
  icon?: string;
  title: string;
}

const FormInput: React.FC<FormInputProps> = ({ icon, title }) => {
  return (
    <>
      <Title>{title}*</Title>
      <InputContainer>
        {icon && (
          <IconBox>
            <img src={icon} alt={title} />
          </IconBox>
        )}
        <InputBox>
          <input type="text" placeholder={title.toLowerCase() + "..."} />
        </InputBox>
      </InputContainer>
    </>
  );
};

export default FormInput;

const Title = styled("div")({
  fontSize: "20px",
  fontWeight: "500",
  margin: "0 5px",
});
const InputContainer = styled("div")({
  display: "flex",
  border: "1px solid gray",
  padding: "0",
  borderRadius: "3px",
  overflow: "hidden",
});
const IconBox = styled("div")({
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "1px solid gray",
  backgroundColor: "#e9ecef",
});
const InputBox = styled("div")({
  width: "300px",
  input: {
    height: "100%",
    width: "100%",
    padding: "10px 20px",
    fontSize: "16px",
    border: "1px solid transparent",
    borderRadius: "0 2px 2px 0",

    ":focus": {
      outline: "none",
      border: "1px solid #b982f3",
    },
  },
});
