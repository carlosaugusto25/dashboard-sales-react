import { Header, StyledH2, StyledButton, CardComponent } from "@/components";
import { Container, Grid } from "@mui/material";
import { logout } from '@/services'

export function Profile() {
    return (
        <>
            <Header />
            <StyledH2>Perfil</StyledH2>
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <CardComponent>
                            Seus Dados...
                        </CardComponent>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardComponent>
                            <StyledButton className="alert" onClick={logout}>Sair</StyledButton>
                        </CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}