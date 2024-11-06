import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent, StyledH1, StyledP, StyledLogo } from "@/components";
import { pixelToRem } from "@/utils";


export function Login() {
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
                                inputs={[
                                    { type: 'email', placeholder: 'Email' },
                                    { type: 'password', placeholder: 'Senha' }
                                ]}
                                buttons={[
                                    { className: 'primary', type: 'submit', children: 'Entrar' }
                                ]}
                                messages={{ msg: 'Sucesso!!', type: 'success' }}
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