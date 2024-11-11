import { ButtonProps } from "@/types";
import styled from "styled-components";
import { pixelToRem } from "@/utils";

export const StyledButton = styled.button<ButtonProps>`
    border-radius: ${pixelToRem(8)};
    border: none;
    box-sizing: border-box;
    font-size: ${pixelToRem(16)};
    font-weight: 700;
    height: ${pixelToRem(50)};
    padding: 0 ${pixelToRem(16)};
    width: 100%;
    transition: background-color 0.3s;

    &.primary {
        background-color: ${({ theme }) => theme.buttons.primary};
        color: ${({ theme }) => theme.buttons.primaryColor};
        &:hover {
            background-color: ${({ theme }) => theme.buttons.primaryHover};
        }
    }

    &.alert {
        background-color: ${({ theme }) => theme.buttons.alert};
        color: ${({ theme }) => theme.buttons.alertColor};
        &:hover {
            background-color: ${({ theme }) => theme.buttons.alertHover};
        }
    }

    &.borderless-alert {
        background-color: none;
        color: ${({ theme }) => theme.buttons.alert};
        height: 0;
        padding: 0;
        &:hover {
            color: ${({ theme }) => theme.buttons.alertHover};
        }
    }
    &.borderless-primary {
        background-color: none;
        color: ${({ theme }) => theme.appLogoColor};
        height: 0;
        padding: 0;
        &:hover {
            opacity: .7;
        }
    }

    &:disabled {
        background-color: ${({ theme }) => theme.buttons.disabled};
        color: ${({ theme }) => theme.buttons.disabledColor};
        cursor: not-allowed;
        &:hover {
            background-color: ${({ theme }) => theme.buttons.disabled};
            color: ${({ theme }) => theme.buttons.disabledColor};
        }
    }
`;