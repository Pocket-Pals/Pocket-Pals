import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

const DogCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 450px;
    background-color: white;
    border-radius: 10px;
    margin: auto;
    padding: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const DogImage = styled(Image)`
    display: block;
    margin-bottom: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const StatsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "a b";    
`

const StatUnfilled = styled.div`
    display: flex;
    width: 140px;   
    height: 15px;
    background-color: rgb(200, 200, 200);
    border-radius: 10px;
    padding: 0;
    margin: 13px;
`
const StatFilled = styled.div`
    display: flex;
    width: 20px;   
    height: 15px;
    background-color: red;
    border-radius: 10px;
    padding: 0;
    margin: 13px;
`

export default function SelectCard({
    img = "/svgs/corgi.svg"
}) {
    return (
        <>
            <Typography
                text="Select a Pocket Pal Breed"
                size="2rem"
                color="#2F2F2F"
                weight="600"
                family="sans-serif"
                align="center"
                display="block"
                margin="20px"
                padding="20px"
                width="100%"
                height="100%"
            />
            <DogCard>
                <Typography
                    text="Medium"
                    size="1.2rem"
                    color="#2F2F2F"
                    weight="bold"
                    family="sans-serif"
                    align="center"
                    display="block"
                    margin="0px"
                    padding="0"
                    width="100%"
                    height="100%"
                />
                <DogImage src={img} width={350} height={350} />
                <StatsContainer>
                    <div>
                        <Typography
                            text="Bark Level:"
                            size="1rem"
                            color="#2F2F2F"
                            weight="regular"
                            family="sans-serif"
                            align="left"
                            display="flex"
                            margin="10px"
                            padding="0"
                            width="100%"
                            height="20px"
                        />
                        <Typography
                            text="Social:"
                            size="1rem"
                            color="#2F2F2F"
                            weight="regular"
                            family="sans-serif"
                            align="left"
                            display="flex"
                            margin="10px"
                            padding="0"
                            width="100%"
                            height="20px"
                        />
                        <Typography
                            text="Energy:"
                            size="1rem"
                            color="#2F2F2F"
                            weight="regular"
                            family="sans-serif"
                            align="left"
                            display="flex"
                            margin="10px"
                            padding="0"
                            width="100%"
                            height="20px"
                        />
                    </div>
                    <div>
                        <StatUnfilled>
                            {/* <StatFilled /> */}
                        </StatUnfilled>
                        <StatUnfilled>

                        </StatUnfilled>
                        <StatUnfilled>

                        </StatUnfilled>

                    </div>
                </StatsContainer>
                <Button text="Select" />
            </DogCard>
        </>
    )
}