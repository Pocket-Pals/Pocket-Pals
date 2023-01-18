import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const HeaderContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Placeholder = styled.div`
width: 100px;
height: 100px;
background-color: red;
margin: 20px;
`
export default function Header() {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <HeaderContainer>
            <Placeholder>placeholder logo</Placeholder>
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
            <Button onClick={handleClick} text="Raise Virtual Pet" />
            <Button onClick={handleClick} text="I'm Ready for a Real Pet" />

        </HeaderContainer>
    )
}