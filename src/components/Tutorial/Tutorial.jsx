import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Pagination from '../Pagination/Pagination';

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin: 20px;
`

const TutorialImage = styled(Image)`
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    margin-bottom:20px;
    width: 600px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export function ImageDiv({
    img = "/svgs/livingroom_sunny.svg",
}) {
    const r = useRouter();
    let { page } = r.query;
    if (page === undefined) {
        page = 0;
        img = "/svgs/livingroom_sunny.svg"
    }
    if (page === "1") {
        img = "/svgs/livingroom_sunny.svg"
    }
    if (page === "2") {
        img = "/svgs/livingroom_bowls.svg"
    }
    if (page === "3") {
        img = "/svgs/livingroom_sponge.svg"
    }
    if (page === "4") {
        img = "/svgs/livingroom_shoe.svg"
    }
    if (page === "5") {
        img = "/placeholderlogo.svg"
    }
    if (page === "6") {
        img = "/placeholderlogo.svg"
    }
    return (
        <>
            <Button text="Skip Tutorial (goes to page 6)"
                onClick={
                    () => r.push({
                        query: {
                            page: page = 6
                        }
                    })
                }
            />
            <TutorialImage src={img} width={400} height={400} />
        </>
    )
}
const TutorialText = {
    1: "These are your Pocket Pal's stats. You can monitor your Pocket Pal's hunger, energy level, and happiness.",
    2: "These are your Pocket Pal's food and water bowls. Fill the bowls and feed your Pocket Pal whenever it's hungry!",
    3: "Make sure you keep your Pocket Pal clean and out of trouble! Click on the sponge to clean your Pocket Pal.",
    4: "The window shows the current weather. Click on the shoes to for a walk with your Pocket Pal when the weather is nice!",
    5: "Your pet will run away if you don't take care of it, so make sure to regularly check on it to keep it happy and healthy!",
    6: "You're ready! You can always come back to this tutorial by clicking on the question mark in the top right corner."
}

export function TutorialDiv({
    text = "Welcome to your virtual home! Here are some quick pointers to get you started on raising your Pocket Pal."
}) {
    const r = useRouter();
    let { page } = r.query;
    if (page === undefined) {
        page = 0;
    }
    text = TutorialText[page] ? TutorialText[page] : text

    if (page >= "6") {
        text = "You're ready! You can always come back to this tutorial by clicking on the question mark in the top right corner."
        page === 0;
        return <div>
            <Typography
                text={text}
                size="24px"
                color="#2F2F2F"
                weight="regular"
                family="sans-serif"
                align="center"
                display="block"
                margin="auto"
                padding="0"
                width="35%"
                height="100%"
            />
            <ButtonDiv>
                <Button text="Back to Page 1 (for now)"
                    onClick={
                        () => r.push({
                            query: {
                                page: page = 0
                            }
                        })
                    } />
            </ButtonDiv>
        </div>
    }

    return (
        <>
            <Pagination />
            <Typography
                text={text}
                size="24px"
                color="#2F2F2F"
                weight="regular"
                family="sans-serif"
                align="center"
                display="block"
                margin="auto"
                padding="0"
                width="35%"
                height="100%"
            />
            <ButtonDiv>
                <Button text="Back" type="secondary"
                    onClick={
                        () => r.replace({
                            query: {
                                page: page === undefined ? page : Math.max(0, Number(page) - 1)
                            }
                        })
                    } />
                <Button text="Next" type="primary" bgcolor="#333"
                    onClick={
                        () => r.replace({
                            query: {
                                page: page === undefined ? page : Math.max(0, Number(page) + 1)
                            }
                        })
                    }
                />
            </ButtonDiv>
        </>
    )
}

