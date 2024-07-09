import styles from "@emotion/styled";

export const FlexBox = styles("div")<{ gap: number }>(({ gap }) => ({
  display: "flex",
  alignItems: "center",
  gap: `${gap}px`,
}));
