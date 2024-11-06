import { CardComponent, Header, AvatarsList } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

export function Home() {

    const mockList = [
        { avatar: '/user-icon.png', name: 'Carlos', subtitle: currencyConverter(1234.54) },
        { avatar: '/user-icon.png', name: 'André', subtitle: currencyConverter(2450.67) },
        { avatar: '/user-icon.png', name: 'Taberson', subtitle: currencyConverter(5879.45) },
    ]

    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>Home</CardComponent>
                <CardComponent>
                    <AvatarsList listData={mockList} />
                </CardComponent>
            </Container>
        </>
    )
}