import styled from "styled-components";
import { StyledLogo } from "@/components";
import { Link } from "react-router-dom";
import { Avatar, Box, Container } from "@mui/material";
import { pixelToRem } from "@/utils";

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.appBackground};
    border-bottom: ${pixelToRem(1)} solid ${({ theme }) => theme.appDefaultStroke};
    margin-bottom: ${pixelToRem(37)};
    width: 100%;
`;

export function Header() {
    return (
        <StyledHeader>
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: pixelToRem(64),
                    }}
                >
                    <Link to='/home'>
                        <StyledLogo height={40} width={40} />
                    </Link>
                    <Link to='/perfil'>
                        <Avatar alt='Avatar' src='/user-icon.png' sx={{ width: pixelToRem(40), height: pixelToRem(40) }} />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}