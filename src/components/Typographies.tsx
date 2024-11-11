import styled from "styled-components";
import { TypographiesProps } from "@/types";
import { pixelToRem } from "@/utils";

export const StyledH1 = styled.h1<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 24)};
    font-weight: ${({ weight }) => weight || 700};
    letter-spacing: ${pixelToRem(-1)};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 36)};
`;

export const StyledH2 = styled.h2<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 16)};
    font-weight: ${({ weight }) => weight || 600};
    letter-spacing: ${pixelToRem(-1)};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 24)};
`;

export const StyledH3 = styled.h2<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 16)};
    font-weight: ${({ weight }) => weight || 600};
    letter-spacing: ${pixelToRem(-1)};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 24)};
`;

export const StyledP = styled.p<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 16)};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 24)};
`;

export const StyledSpan = styled.span<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 16)};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 24)};
`;

export const StyledUl = styled.ul<TypographiesProps>`
    color: ${({ color }) => color || 'inherit'};
    font-size: ${({ size }) => pixelToRem(size || 16)};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineheight }) => pixelToRem(lineheight || 24)};
    list-style-position: inside;
    li {
        list-style-position: outside;
        margin-left: ${pixelToRem(15)};
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: ${pixelToRem(5)};
    }
`;