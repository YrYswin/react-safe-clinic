import React from "react";

interface TextFiledProps {
  label: string;
  value: string;
}

const TextFiled: React.FC<TextFiledProps> = ({ label, value }) => {
  return (
    <div style={{ width: "50%", margin: "4px 0" }}>
      <p>
        <b>{label + ":  "}</b>
        {value}
      </p>
    </div>
  );
};

export default TextFiled;
