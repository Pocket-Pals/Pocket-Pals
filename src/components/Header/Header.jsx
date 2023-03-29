import styled from "styled-components";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   width: 20%;
  gap: 20px;
`;
export default function Header({ img = "/svgs/logo.svg" }) {
  const router = useRouter();

  const handleClickRaisePet = () => {
    // router.push('/login')
    router.push("/tutorial");
  };
  const handleClickSearch = () => {
    router.push("/find");
  };
  return (
    <HeaderContainer>
      <Image src={img} alt="Logo" width={600} height={220} priority />
      <Typography
        text="Raise a Pocket Pal or search for a Real Pet"
        size="24px"
        color="#AA4A19"
        weight="regular"
        family="sans-serif"
        align="center"
        display="block"
        margin="20px"
        padding="0px 0px 20px 0px"
        // width="50%"
        // height="100%"
      />
      <ButtonContainer>
        <Button onClick={handleClickRaisePet} text="Raise Pocket Pal" />
        <Button
          onClick={handleClickSearch}
          text="Search for a Real Pet"
          type="secondary"
          border="2px solid #F67837"
        />
      </ButtonContainer>
    </HeaderContainer>
  );
}
