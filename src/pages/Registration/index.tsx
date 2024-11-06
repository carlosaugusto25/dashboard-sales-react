import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent, StyledH1, StyledLogo, StyledP, StyledUl } from "@/components";
import { pixelToRem } from "@/utils";

export function Registration() {
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
                                <StyledH1>Realize seu cadastro</StyledH1>
                                <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                                <StyledUl>
                                    <li>Entre 8 a 16 caracteres;</li>
                                    <li>Pelo menos uma letra maiúscula;</li>
                                    <li>Pelo menos um número;</li>
                                    <li>Pelo menos um caractere especial.</li>
                                </StyledUl>
                            </Box>

                            <FormComponent
                                inputs={[
                                    { type: 'email', placeholder: 'Email' },
                                    { type: 'password', placeholder: 'Senha' }
                                ]}
                                buttons={[
                                    { className: 'primary', type: 'submit', children: 'Entrar' }
                                ]}
                                messages={{ msg: 'Erro!!', type: 'error' }}
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