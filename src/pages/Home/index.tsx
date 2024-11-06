import { CardComponent, Header } from "@/components";
import { Container } from "@mui/material";

export function Home() {
    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>Home</CardComponent>
            </Container>
        </>
    )
}