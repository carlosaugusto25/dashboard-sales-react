import { AvatarsListProps } from "@/types";
import { Avatar, Box } from "@mui/material";
import { pixelToRem } from "@/utils";
import { StyledH2, StyledSpan } from "./Typographies";

export function AvatarsList(props: AvatarsListProps) {
  return (
    <>
      {props.listData.map((item, index) => (
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            padding: `${pixelToRem(12)} 0`,
            key: index,
          }}
        >
          <Box>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{
                width: pixelToRem(48),
                height: pixelToRem(48),
                marginRight: pixelToRem(16),
              }}
            />
          </Box>
          <Box>
            <StyledH2>{item.name}</StyledH2>
            <StyledSpan>{item.subtitle}</StyledSpan>
          </Box>
        </Box>
      ))}
    </>
  );
}
