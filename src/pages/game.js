import Game from "src/components/Game/index"
// import GameBG from "src/components/GameBg"
import styled from "styled-components"

const ContainerBG = styled.div`
  background-image: url('/assets/bg/4x/pawprint@4x.png');
  width: 100vw;
  height: 100vh;
  z-index: -10;
  position: fixed;
`

export default function GameWindow() {

  return (<>


    <ContainerBG></ContainerBG>

    <Game />





  </>)
}