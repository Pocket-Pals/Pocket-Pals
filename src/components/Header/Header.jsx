import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HeaderContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Placeholder = styled(Image)`
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    margin-bottom:10px;
    width: 600px;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export default function Header({
    img = "/svgs/logo.svg"
}) {
    const router = useRouter();

    const handleClickRaisePet = () => {
        // router.push('/login')
        router.push('/tutorial')
    }
    const handleClickSearch = () => {
        // router.push('/search')
        alert("search for pets page")
    }
    return (
        <HeaderContainer>
            <Placeholder src={img} width={600} height={600} />
            <Typography
                text="Practice makes perfect — raise a virtual Pocket Pal so you become prepared to raise a new pet"
                size="18px"
                color="#2F2F2F"
                weight="regular"
                family="sans-serif"
                align="center"
                display="block"
                margin="20px"
                padding="0"
                width="28%"
                height="100%"
            />
            <Button onClick={handleClickRaisePet} text="Raise Pocket Pal" />
            <Button onClick={handleClickSearch} text="Search for a Real Pet" />

        </HeaderContainer>
    )
}