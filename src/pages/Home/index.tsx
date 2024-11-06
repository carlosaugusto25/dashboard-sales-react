import { CardComponent, Header, AvatarsList, CustomTable, CustomChart } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

export function Home() {

    const mockList = [
        { avatar: '/user.svg', name: 'Carlos', subtitle: currencyConverter(1234.54) },
        { avatar: '/user.svg', name: 'André', subtitle: currencyConverter(2450.67) },
        { avatar: '/user.svg', name: 'Taberson', subtitle: currencyConverter(5879.45) },
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
                <CardComponent>
                    <CustomChart labels={['jan', 'fev', 'mar', 'abr']} data={[1000.12, 200.12, 3000.12, 456.56, 4565.55]} type="bar" />
                </CardComponent>
            </Container>
        </>
    )
}