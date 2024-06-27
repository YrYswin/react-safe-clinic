import React from "react";
import { IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "antd";

import { searchParamsState, GenderState } from "../../../utils/types";
import { tagArray } from "../../../utils/constant";

interface InputUIProps {
  placeholder?: string;
  items?: searchParamsState[];
  onChange?: (e: string) => void;
  value?: string;
  onTag?: (e: number) => void;
  onGender?: (e: string) => void;
  onAge?: (e: string) => void;
}

const InputUI: React.FC<InputUIProps> = ({
  placeholder,
  items,
  onChange,
  value,
  onTag,
  onGender,
  onAge,
}) => {
  const isFilter = Boolean(items);
  const filters = (key: string) => {
    if (key === "1-1") {
      onGender && onGender(GenderState.MALE);
    } else if (key === "1-2") {
      onGender && onGender(GenderState.FAMALE);
    }
    const findTag = tagArray.find((x) => x.label === key);
    if (findTag?.label === key) {
      onTag && onTag(findTag.id);
    }
    if (key === "3-1") {
      onAge && onAge("0-20");
    } else if (key === "3-2") {
      onAge && onAge("20-30");
    } else if (key === "3-3") {
      onAge && onAge("30-40");
    } else if (key === "3-4") {
      onAge && onAge("40-50");
    } else if (key === "3-5") {
      onAge && onAge("50+");
    }
  };

  return (
    <Container isFilter={isFilter}>
      {items && (
        <Dropdown
          menu={{
            items,
            onClick: (e) => filters(e.key),
          }}
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={(e) => e.preventDefault()}
          >
            <img src="/icon/filterInput.svg" alt="uno" />
          </IconButton>
        </Dropdown>
      )}
      <InputStyle
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        id="search"
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Container>
  );
};

export default InputUI;

const Container = styled("div")<{ isFilter: boolean }>(({ isFilter }) => ({
  display: "inline-flex",
  border: "1px solid gray",
  borderRadius: "7px",
  padding: "0px 5px",
  paddingLeft: isFilter ? "0" : "15px",
  gap: "5px",
}));

const InputStyle = styled(InputBase)({
  "::placeholder": {
    color: "gray",
  },
});
