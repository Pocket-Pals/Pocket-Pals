import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import data from '../../data/dogStats.json';

const DogCardContainers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 80%;
    gap: 0;
    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 30px;
    }
`
const DogCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    max-height: 450px;
    background-color: white;
    border-radius: 10px;
    margin: auto;
    padding: 40px 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const DogImage = styled(Image)`
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const StatsContainer = styled.div`
    width: 100%;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "a b";    
`

const StatUnfilled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding-top: 15px;
`
const StatFilled = styled.div`
    display: flex;
    width: ${(props) => props.width * 10}px;   
    height: 15px;
    background-color: rgb(0, 150, 250);
    border-radius: 10px;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
`

export default function SelectCard({
    easy = "/svgs/ridgehound.svg",
    medium = "/svgs/corgi.svg",
    hard = "/svgs/samoyed.svg",
}) {
    const router = useRouter();

    const handleSelect = (difficulty) => {
        alert(`selected ${difficulty} dog`);
        // router.push(`/game/${difficulty}`);
    };


    return (
        <>
            <Typography
                text="Select a Pocket Pal"
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
            <DogCardContainers>
                <DogCard>
                    <Typography
                        text="Easy"
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
                    <DogImage src={easy} width={350} height={350} />
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
                                <StatFilled width={data[0].barkLevel} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[0].social} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[0].energy} />
                            </StatUnfilled>
                        </div>
                    </StatsContainer>
                    <Button onClick={() => handleSelect("easy")} text="Select" />
                </DogCard>
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
                    <DogImage src={medium} width={350} height={350} />
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
                                <StatFilled width={data[1].barkLevel} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[1].social} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[1].energy} />
                            </StatUnfilled>
                        </div>
                    </StatsContainer>
                    <Button onClick={() => handleSelect("medium")} text="Select" />
                </DogCard>
                <DogCard>
                    <Typography
                        text="Hard"
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
                    <DogImage src={hard} width={350} height={350} />
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
                                <StatFilled width={data[2].barkLevel} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[2].social} />
                            </StatUnfilled>
                            <StatUnfilled>
                                <StatFilled width={data[2].energy} />
                            </StatUnfilled>
                        </div>
                    </StatsContainer>
                    <Button onClick={() => handleSelect("hard")} text="Select" />
                </DogCard>
            </DogCardContainers>
        </>
    )
}