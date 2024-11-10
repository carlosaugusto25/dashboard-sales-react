import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

//COMPONENTS
import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent, StyledH1, StyledP, StyledLogo } from "@/components";

//HOOKS
import { useFormValid, usePost } from "@/hooks";

//UTILS
import { pixelToRem, jwtExpirationDateConverter } from "@/utils";

//TYPES
import { MessageProps, LoginData, LoginPostData, DecodedJWT } from '@/types';


export function Login() {

    const navigate = useNavigate()

    const inputs = [
        { type: 'email', placeholder: 'Email' },
        { type: 'password', placeholder: 'Senha' }
    ]

    const { data, loading, error, postData } = usePost<LoginData, LoginPostData>('login')

    const { formValues, formValid, handleChange } = useFormValid(inputs)

    const handleMessage = (): MessageProps => {
        if (!error) return { msg: '', type: 'success' }
        switch (error) {
            case 401:
                return { msg: 'Email ou senha inválidos', type: 'error' }
            default:
                return { msg: 'Ocorreu um erro ao fazer login', type: 'error' }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await postData({ email: String(formValues[0]), password: String(formValues[1]) })
    }

    useEffect(() => {
        if (data?.jwt_token) {
            const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
            Cookies.set('Autorization', data.jwt_token, {
                expires: jwtExpirationDateConverter(decoded.exp),
                secure: true
            })
        }
        if (Cookies.get('Autorization')) navigate('/home')
    }, [data, navigate])

    return (
        <>
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={6} sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
                        <Container maxWidth='sm'>
                            <Box sx={{ marginBottom: pixelToRem(24) }}>
                                <StyledLogo height={80} width={80} />
                            </Box>
                            <Box sx={{ marginBottom: pixelToRem(24) }}>
                                <StyledH1>Bem-vindo</StyledH1>
                                <StyledP>Faça login para acessar sua conta</StyledP>
                            </Box>
                            <FormComponent
                                inputs={inputs.map((input, index) => ({
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: formValues[index] || '',
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(index, (e.target as HTMLInputElement).value)
                                }))}
                                buttons={[
                                    {
                                        className: 'primary',
                                        type: 'submit',
                                        children: loading ? 'Aguarde...' : 'Entrar',
                                        disabled: !formValid || loading,
                                        onClick: handleSubmit
                                    }
                                ]}
                                messages={handleMessage()}
                            />
                        </Container>
                    </Grid>
                    <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <BannerImage />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}