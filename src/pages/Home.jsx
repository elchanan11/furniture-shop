import styled from "styled-components";
import Navbar from "../components/Navbar";
import bg_home from '../images/logo_bg.jpg'
import {Add, PlusOne} from "@mui/icons-material";
import PlusIcons from "../components/PlusIcons";

const Container = styled.div`
  width: 100%;
  font-family: 'Source Serif Pro', serif;`

const Image = styled.img`
  position: absolute;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-height: 100%;
  width: 100vw;
  
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-top: 2%;
  cursor: pointer;
`
const Title = styled.h1`
  height: 5px;
  font-size: 50px;
  bottom: 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
const SubTitle = styled.h1`
    font-size: 35px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`


function Home() {
    return (
        <>

            <Container>
                <Image src={bg_home}/>
                <Navbar />
                <TextContainer>
                    <Title>
                        Just offer
                    </Title>
                    <SubTitle>
                        Or search for free
                    </SubTitle>
                </TextContainer>
                <PlusIcons />
            </Container>
        </>
    );
}

export default Home;
