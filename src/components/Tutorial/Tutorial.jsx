import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

//replace this with actual UI
const PlaceholderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 500px;
    height: 300px;
    background-color: red;
    `

export function TutorialDescription({
    text = "Welcome to your virtual home! Here are some quick pointers to get you started on raising your Pocket Pal."
}) {
    const r = useRouter();
    var { tut } = r.query;
    if (tut === undefined) {
        tut = 0;
    }

    if (tut === "1") {
        text = "These are your Pocket Pal's current stats. These stats will periodically decrease overtime if you don't take care of your Pocket Pal."
    }
    if (tut === "2") {
        text = "The window displays the current weather. Make sure to take a walk with your Pocket Pal when the weather is nice!"
    }
    if (tut === "3") {
        text = "Your pet will run away if you don't take care of it, so make sure to regularly check on it to keep it happy and healthy!"
    }
    if (tut >= "4") {
        text = "lol"
        tut === 0;
        return <div>
            <Button text="Back to Page 1 (for now)"
                onClick={
                    () => r.push({
                        query: {
                            tut: tut = 0
                        }
                    })
                } />
        </div>
    }

    return (
        <>
            <PlaceholderBox />
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
                width="28%"
                height="100%"
            />
            <ButtonDiv>
                <Button text="Back" type="secondary"
                    onClick={
                        () => r.replace({
                            query: {
                                tut: tut === undefined ? tut : Math.max(0, Number(tut) - 1)
                            }
                        })
                    } />
                <Button text="Next" type="primary"
                    onClick={
                        () => r.replace({
                            query: {
                                tut: tut === undefined ? tut : Math.max(0, Number(tut) + 1)
                            }
                        })
                    }
                />
            </ButtonDiv>
        </>
    )
}