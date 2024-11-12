import { InputProps } from "@/types";
import styled from "styled-components";
import { pixelToRem } from "@/utils";

export const StyledInput = styled.input<InputProps>`
  border-radius: ${pixelToRem(8)};
  border: ${pixelToRem(1)} solid ${({ theme }) => theme.textInput.borderColor};
  background-color: ${({ theme }) => theme.textInput.active};
  color: ${({ theme }) => theme.textInput.activeColor};
  box-sizing: border-box;
  cursor: pointer;
  height: ${pixelToRem(40)};
  font-size: ${pixelToRem(14)};
  font-weight: 500;
  padding: ${pixelToRem(8)} ${pixelToRem(16)};
  transition: background-color 0.3s;
  width: 100%;
  outline: none;

  &:disabled {
    background-color: ${({ theme }) => theme.textInput.disabled};
    border: ${pixelToRem(1)} solid
      ${({ theme }) => theme.textInput.disabledBorderColor};
    color: ${({ theme }) => theme.textInput.disabledColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textInput.placeholderColor};
  }
`;
