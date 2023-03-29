import styled from "styled-components";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { Progress, Grid } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "../../data/dogStats.json";

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
`;
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
`;
const DogImage = styled(Image)`
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 350px;
  width: 350px;
`;
const StatsContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-areas: "a b";
`;

export default function SelectCard({
  easy = "/svgs/ridgehound.svg",
  medium = "/svgs/corgi.svg",
  hard = "/svgs/samoyed.svg",
}) {
  const router = useRouter();
  const {query} = router.query

  const handleSelect = (difficulty) => {
    
  };
  const handleBackToTutorial = () => {
    router.push("/tutorial");
  };

  return (
    <>
      <Button
        onClick={handleBackToTutorial}
        text="Back"
        width="100px"
        hoverbgcolor="#D96D36"
      />
      <Typography
        text="Select a Pocket Pal"
        size="2rem"
        color="#514EDB"
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
            color="#514EDB"
            weight="bold"
            family="sans-serif"
            align="center"
            display="block"
            margin="0px"
            padding="0"
            width="100%"
            height="100%"
          />
          <DogImage
            src={easy}
            width={350}
            height={350}
            alt="Easy Pocket Pal"
            priority
          />
          <StatsContainer>
            <div className="flex flex-col">
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
              <Grid.Container xs={12} sm={20} gap={1.4}>
                <Grid>
                  <Progress color="warning" value={data[0].barkLevel * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[0].social * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[0].energy * 10} />
                </Grid>
              </Grid.Container>
            </div>
          </StatsContainer>
          <Link
            href={{
              pathname: '/game',
              query: {difficulty: 2}
            }}
          >
        
          <Button
            // onClick={() => handleSelect(0)}
            text="Select"
            hoverbgcolor="#D96D36"
          />
          </Link>
        </DogCard>
        <DogCard>
          <Typography
            text="Medium"
            size="1.2rem"
            color="#514EDB"
            weight="bold"
            family="sans-serif"
            align="center"
            display="block"
            margin="0px"
            padding="0"
            width="100%"
            height="100%"
          />
          <DogImage
            src={medium}
            width={350}
            height={350}
            alt="Medium Pocket Pal"
            priority
          />
          <StatsContainer>
            <div className="flex flex-col">
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
              <Grid.Container xs={12} sm={20} gap={1.4}>
                <Grid>
                  <Progress color="warning" value={data[1].barkLevel * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[1].social * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[1].energy * 10} />
                </Grid>
              </Grid.Container>
            </div>
          </StatsContainer>
          <Link
            href={{
              pathname: '/game',
              query: {difficulty: 0}
            }}
          >
          <Button
            text="Select"
            hoverbgcolor="#D96D36"
          />
          </Link>
        </DogCard>
        <DogCard>
          <Typography
            text="Hard"
            size="1.2rem"
            color="#514EDB"
            weight="bold"
            family="sans-serif"
            align="center"
            display="block"
            margin="0px"
            padding="0"
            width="100%"
            height="100%"
          />
          <DogImage
            src={hard}
            width={350}
            height={350}
            alt="Hard Pocket Pal"
            priority
          />
          <StatsContainer>
            <div className="flex flex-col">
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
              <Grid.Container xs={12} sm={20} gap={1.4}>
                <Grid>
                  <Progress color="warning" value={data[2].barkLevel * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[2].social * 10} />
                </Grid>
                <Grid>
                  <Progress color="warning" value={data[2].energy * 10} />
                </Grid>
              </Grid.Container>
            </div>
          </StatsContainer>
          <Link
            href={{
              pathname: '/game',
              query: {difficulty: 1}
            }}
          >
          <Button
            text="Select"
            hoverbgcolor="#D96D36"
          />
          </Link>
        </DogCard>
      </DogCardContainers>
    </>
  );
}
