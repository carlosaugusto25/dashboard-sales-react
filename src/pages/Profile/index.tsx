import { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";

//COMPONENTS
import {
  Header,
  StyledButton,
  CardComponent,
  StyledH1,
  FormComponent,
  StyledH2,
} from "@/components";
import { Container, Grid } from "@mui/material";

//SERVICES
import { logout } from "@/services";

//HOOKS
import { useFormValid, useGet, usePut, useDelete } from "@/hooks";

//TYPES
import {
  InputProps,
  ProfileDataProps,
  ProfileEditableDataProps,
  MessageProps,
} from "@/types";

export function Profile() {
  //HOOKS

  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
    type: "success",
    msg: "",
  });

  const clearMessage = () => {
    setTimeout(() => {
      setUpdateMessage({ type: "success", msg: "" });
    }, 3000);
  };

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileDataProps>("profile");

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableDataProps>("profile/update");

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
    useDelete("profile/delete");

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name);
      handleChange(1, profileData.email);
      handleChange(2, profileData.phone);
    }
  }, [profileData]);

  //FORM
  const inputs: InputProps[] = [
    { name: "name", type: "text", placeholder: "Nome", required: true },
    { name: "email", type: "email", placeholder: "Email", disabled: true },
    { name: "phone", type: "tel", placeholder: "Telefone", required: true },
  ];

  const { formValues, formValid, handleChange } = useFormValid(inputs);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    });
  };
  const handleDelete = async () => {
    if (
      confirm(
        "Deseja realmente excluir sua conta? Se sim, certifique-se de deletar os seus leads antes,",
      )
    ) {
      try {
        await profileDeleteData();
        alert("Perfil deletado com sucesso");
        Cookies.remove("Autorization");
        window.location.href = "/";
      } catch (error) {
        alert(
          "Não foi possível realizar a operação. Entre em contato com nosso suporte",
        );
      }
    }
  };

  useEffect(() => {
    if (profileUpdateData !== null) {
      setUpdateMessage({
        msg: "Perfil atualizado com sucesso",
        type: "success",
      });
    } else if (profileUpdateError) {
      setUpdateMessage({
        msg: "Ocorreu um erro ao atualizar o perfil",
        type: "error",
      });
    }
    clearMessage();
  }, [profileUpdateData, profileUpdateError]);

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <StyledH1 className="mb-1">Perfil</StyledH1>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? "skeleton-loading skeleton-loading-mh-2" : ""
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || "",
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value,
                          ),
                      }))}
                      buttons={[
                        {
                          id: "update-profile",
                          className: "primary",
                          disabled: !formValid || profileUpdateLoading,
                          type: "submit",
                          onClick: handleSubmit,
                          children: profileUpdateLoading
                            ? "Atualizando..."
                            : "Atualizar",
                        },
                        {
                          id: "delete-profile",
                          className: "alert",
                          type: "button",
                          onClick: handleDelete,
                          children: profileDeleteLoading
                            ? "Excluindo..."
                            : "Excluir minha conta",
                          disabled: profileUpdateLoading,
                        },
                      ]}
                      messages={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledButton id="logout" className="alert" onClick={logout}>
                Sair
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
