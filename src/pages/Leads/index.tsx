import { ChangeEvent, useEffect, useState } from "react";

//COMPONENTS
import { Header, CardComponent, FormComponent, StyledH2, StyledButton, CustomTable, StyledP, StyledSpan } from "@/components";
import { Container, Grid } from "@mui/material";

//HOOK
import { useFormValid, useGet, useDelete, usePost } from "@/hooks";

//TYPES
import { InputProps, LeadsDataProps, LeadsPostDataProps, MessageProps } from "@/types";

export function Leads() {

    //HOOKS
    const {
        data: createLeadsData,
        loading: createLeadsLoading,
        error: createLeadsError,
        postData: createLeadsPostData
    } = usePost<LeadsDataProps, LeadsPostDataProps>('leads/create', true);

    const {
        data: leadsData,
        loading: leadsLoading,
        error: leadsError,
        getData: getLeads
    } = useGet<LeadsDataProps[]>('leads')

    const {
        deleteData: leadsDeleteData,
        loading: leadsDeleteLoading,
    } = useDelete('leads/delete')

    //FORMS
    const inputs: InputProps[] = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]

    const { formValues, formValid, handleChange } = useFormValid(inputs)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await createLeadsPostData({
            name: String(formValues[0]),
            email: String(formValues[1]),
            phone: String(formValues[2]),
        })

        formValues.map((_, index) => {
            handleChange(index, '')
        })
    };

    const handleDelete = async (id: number) => {
        if (confirm('Deseja realmente excluir o lead?')) {
            try {
                await leadsDeleteData({ params: { id: id } })
                alert('Lead deletado com sucesso')
                getLeads()
            } catch (e) {
                alert('Não foi possível deletar o lead')
            }
        }
    }

    const [createMessage, setCreateMessage] = useState<MessageProps>({
        type: 'success',
        msg: ''
    })

    const clearMessage = () => {
        setTimeout(() => {
            setCreateMessage({ type: 'success', msg: '' });
        }, 3000);
    }

    useEffect(() => {
        if (createLeadsData?.id) {
            setCreateMessage({
                type: 'success',
                msg: 'Lead cadastrado com sucesso'
            })
            getLeads()
            clearMessage()
        } else if (createLeadsError) {
            setCreateMessage({
                type: 'error',
                msg: 'Ocorreu um erro ao cadastrar o lead'
            })
        } else {
            clearMessage()
        }
    }, [createLeadsData, createLeadsError])

    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <CardComponent className={leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                            {
                                !leadsError && !leadsLoading && (
                                    <>
                                        <StyledH2 className="mb-1" id='leads'>Meus Leades</StyledH2>
                                        {
                                            leadsData?.length ? (
                                                <CustomTable
                                                    headers={['Nome', 'Email', 'Telefone', '']}
                                                    rows={leadsData.map(lead => [
                                                        <StyledP>{lead.name}</StyledP>,
                                                        <StyledP>{lead.email}</StyledP>,
                                                        <StyledP>{lead.phone}</StyledP>,
                                                        <StyledButton className="borderless-alert" onClick={() => handleDelete(lead.id)} disabled={leadsDeleteLoading}>
                                                            Excluir
                                                        </StyledButton>
                                                    ])}
                                                />
                                            ) : <StyledSpan>Sem leads cadastrados</StyledSpan>
                                        }
                                    </>
                                )
                            }

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
                                    {
                                        className: 'primary',
                                        disabled: !formValid || createLeadsLoading || leadsDeleteLoading,
                                        type: 'submit',
                                        onClick: handleSubmit,
                                        children: 'Cadstrar Lead'
                                    },
                                ]}
                                messages={createMessage}
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
