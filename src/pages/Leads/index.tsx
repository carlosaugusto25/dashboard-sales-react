import { ChangeEvent } from "react";

//COMPONENTS
import { Header, CardComponent, FormComponent, StyledH2, StyledButton, CustomTable } from "@/components";
import { Container, Grid } from "@mui/material";

//HOOK
import { useFormValid, useGet, useDelete, usePost } from "@/hooks";

//TYPES
import { InputProps } from "@/types";

export function Leads() {

    const inputs: InputProps[] = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]

    const { formValues, formValid, handleChange } = useFormValid(inputs)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

    };

    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <CardComponent>
                            <StyledH2 >Meus Leades</StyledH2>
                            <CustomTable
                                headers={['Nome', 'Email', 'Telefone', '']}
                                rows={[['', '', '', '']]}
                            />
                        </CardComponent>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <CardComponent>
                            <StyledH2 className="mb-1">Cadstrar Leads</StyledH2>
                            <FormComponent
                                inputs={inputs.map((input, index) => ({
                                    ...input,
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: formValues[index] || '',
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(index, (e.target as HTMLInputElement).value),
                                }))}
                                buttons={[
                                    { className: 'primary', disabled: !formValid, type: 'submit', onClick: handleSubmit, children: 'Cadstrar Lead' },
                                ]}
                            />
                        </CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

// function useValid(inputs: InputProps[]) {
//     throw new Error("Function not implemented.");
// }
