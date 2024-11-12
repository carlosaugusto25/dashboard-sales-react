import { StyledButton, StyledInput } from "@/components";
import { FormComponentProps } from "@/types";
import styled from "styled-components";
import { pixelToRem } from "@/utils";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pixelToRem(16)};
`;

export function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, messages } = props;
  return (
    <StyledForm>
      {inputs.map((input, index) => (
        <StyledInput key={index} {...input} />
      ))}
      {buttons.map((button, index) => (
        <StyledButton key={index} {...button} />
      ))}
      {messages && (
        <div style={{ color: messages.type === "success" ? "green" : "red" }}>
          {messages.msg}
        </div>
      )}
    </StyledForm>
  );
}
