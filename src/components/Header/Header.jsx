import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

const HeaderContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Placeholder = styled.div`
    width: 200px;
    height: 200px;
    background-image: url('/placeholderlogo.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Header() {
    const router = useRouter();

    const handleClickRaisePet = () => {
        // router.push('/login')
        alert("login page or choose pet page")
    }
    const handleClickSearch = () => {
        // router.push('/search')
        alert("search for pets page")
    }
    return (
        <HeaderContainer>
            <Placeholder />
            <Typography
                text="Practice makes perfect — start with a virtual pet so you become prepared to raise a new one"
                size="16px"
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
            <Button onClick={handleClickRaisePet} text="Raise Virtual Pet" />
            <Button onClick={handleClickSearch} text="I'm Ready for a Real Pet" />

        </HeaderContainer>
    )
}