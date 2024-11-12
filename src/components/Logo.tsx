import styled from "styled-components";
import { pixelToRem } from "@/utils";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const StyledLogo = styled(FaMoneyBillTrendUp)<{
  height: number;
  width: number;
}>`
  color: ${({ theme }) => theme.appLogoColor};
  height: ${({ height }) => pixelToRem(height)};
  width: ${({ width }) => pixelToRem(width)};
`;
