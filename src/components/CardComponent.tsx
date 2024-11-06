import styled from "styled-components";
import { pixelToRem } from "@/utils";

export const CardComponent = styled.div`
    background-color: ${({ theme }) => theme.card.background};
    border-radius: ${pixelToRem(8)};
    border: ${pixelToRem(1)} solid ${({ theme }) => theme.card.border};
    box-sizing: border-box;
    padding: ${pixelToRem(24)};
    width: 100%;

    &.alert {
        background-color: ${({ theme }) => theme.card.alert};
        border-color: ${({ theme }) => theme.card.alert};
    }

    &.success {
        background-color: ${({ theme }) => theme.card.success};
        border-color: ${({ theme }) => theme.card.success};
    }

    &.warning {
        background-color: ${({ theme }) => theme.card.warning};
        border-color: ${({ theme }) => theme.card.warning};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;