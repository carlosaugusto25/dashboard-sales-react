import { CardComponent, Header, AvatarsList, CustomTable } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

export function Home() {

    const mockList = [
        { avatar: '/user-icon.png', name: 'Carlos', subtitle: currencyConverter(1234.54) },
        { avatar: '/user-icon.png', name: 'André', subtitle: currencyConverter(2450.67) },
        { avatar: '/user-icon.png', name: 'Taberson', subtitle: currencyConverter(5879.45) },
    ]

    const mockTableData = {
        headers: ['Name', 'Email', 'Actions'],
        rows: [
            [
                <span>Carlos</span>,
                <span>2Jp2I@example.com</span>,
                <button>Edit</button>
            ],
            [
                <span>Carlos</span>,
                <span>2Jp2I@example.com</span>,
                <button>Edit</button>
            ],
            [
                <span>Carlos</span>,
                <span>2Jp2I@example.com</span>,
                <button>Edit</button>
            ]
        ]
    }

    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>Home</CardComponent>
                <CardComponent>
                    <AvatarsList listData={mockList} />
                </CardComponent>
                <CardComponent>
                    <CustomTable headers={mockTableData.headers} rows={mockTableData.rows} />
                </CardComponent>
            </Container>
        </>
    )
}