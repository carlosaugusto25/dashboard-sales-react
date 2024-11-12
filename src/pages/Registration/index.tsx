import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import { Box, Container, Grid } from "@mui/material";
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledLogo,
  StyledP,
  StyledUl,
} from "@/components";

//UTILS
import { pixelToRem } from "@/utils";

//HOOKS
import { useFormValid, usePost } from "@/hooks";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { setMessage, setProfileData } from "@/redux/slices/createProfile";

//TYPES
import { CreateProfileData, InputProps } from "@/types";

//ICONS
import { FaCheck, FaTimes } from "react-icons/fa";

export function Registration() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { email } = useSelector((state: RootState) => state.createProfile);

  const { data, loading, error, postData } = usePost<string, CreateProfileData>(
    "profile/create",
  );

  //FORM STEP 1
  const step1Inputs: InputProps[] = [
    { name: "name", type: "text", placeholder: "Nome", required: true },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "phone", type: "tel", placeholder: "Telefone", required: true },
  ];

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      setProfileData({
        email: String(step1FormValues[1]),
      }),
    );
  };

  const {
    formValues: step1FormValues,
    formValid: step1FormValid,
    handleChange: step1HandleChange,
  } = useFormValid(step1Inputs);

  //FORM STEP 2
  const step2Inputs: InputProps[] = [
    { type: "password", placeholder: "Senha" },
  ];

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData({
      name: String(step1FormValues[0]),
      email: String(step1FormValues[1]),
      phone: String(step1FormValues[2]),
      password: String(step2FormValues[0]),
    });
  };

  const {
    formValues: step2FormValues,
    formValid: step2FormValid,
    handleChange: step2HandleChange,
    validationPassword,
  } = useFormValid(step2Inputs);

  const handleStepInputs = email ? step2Inputs : step1Inputs;

  useEffect(() => {
    if (data !== null) {
      dispatch(setMessage("Usuário criado com sucesso!"));
      navigate("/");
    } else if (error) {
      alert(`Ocorreu um erro ao criar o usuário = ${error}.`);
    }
  }, [data, error, navigate]);

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: "center", display: "flex", height: "100vh" }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pixelToRem(24) }}>
                <StyledLogo height={80} width={80} />
              </Box>
              <Box sx={{ marginBottom: pixelToRem(24) }}>
                <StyledH1>
                  {email ? "Defina sua senha" : "Faça seu cadastro"}
                </StyledH1>
                <StyledP>
                  {email
                    ? "Sua senha deve ter:"
                    : "Primeiro, diga-nos quem você é."}
                </StyledP>
                {email && (
                  <StyledUl>
                    <li>
                      {validationPassword.hasCorrectLenght ? (
                        <FaCheck color="#008000" size={16} />
                      ) : (
                        <FaTimes color="#e80000" size={16} />
                      )}
                      Entre 8 a 16 caracteres;
                    </li>
                    <li>
                      {validationPassword.hasUppercase ? (
                        <FaCheck color="#008000" size={16} />
                      ) : (
                        <FaTimes color="#e80000" size={16} />
                      )}
                      Pelo menos uma letra maiúscula;
                    </li>
                    <li>
                      {validationPassword.hasNumber ? (
                        <FaCheck color="#008000" size={16} />
                      ) : (
                        <FaTimes color="#e80000" size={16} />
                      )}
                      Pelo menos um número;
                    </li>
                    <li>
                      {validationPassword.hasSpecialChar ? (
                        <FaCheck color="#008000" size={16} />
                      ) : (
                        <FaTimes color="#e80000" size={16} />
                      )}
                      Pelo menos um caractere especial.
                    </li>
                  </StyledUl>
                )}
              </Box>

              <FormComponent
                inputs={handleStepInputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: email
                    ? step2FormValues[index] || ""
                    : step1FormValues[index] || "",
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    email
                      ? step2HandleChange(
                          index,
                          (e.target as HTMLInputElement).value,
                        )
                      : step1HandleChange(
                          index,
                          (e.target as HTMLInputElement).value,
                        ),
                }))}
                buttons={[
                  {
                    className: "primary",
                    type: "submit",
                    children: email ? "Enviar" : "Próximo",
                    disabled: email
                      ? !step2FormValid || loading
                      : !step1FormValid,
                    onClick: email ? handleStep2 : handleStep1,
                  },
                ]}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
