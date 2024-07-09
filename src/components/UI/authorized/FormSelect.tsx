import React from "react";
import { styled } from "@mui/material";
import { tagState } from "../../../utils/types";

interface FormSelectProps {
  icon: string;
  tags: tagState[];
  title: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ icon, tags, title }) => {
  return (
    <>
      <Title>{title}*</Title>
      <InputContainer>
        <IconBox>
          <img src={icon} />
        </IconBox>
        <SelectBox>
          <select>
            {tags.map((tag) => (
              <option key={tag.id} defaultValue={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
        </SelectBox>
      </InputContainer>
    </>
  );
};

export default FormSelect;

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
  backgroundColor: "#e9ecef",
  borderRight: "1px solid gray",
});
const SelectBox = styled("div")({
  width: "300px",
  select: {
    width: "100%",
    height: "100%",
    padding: "10px 20px",
    fontSize: "18px",
    border: "1px solid transparent",
    borderRadius: "0 2px 2px 0",

    option: {
      width: "100%",
    },

    ":focus": {
      outline: "none",
      border: "1px solid #b982f3",
    },
  },
});
