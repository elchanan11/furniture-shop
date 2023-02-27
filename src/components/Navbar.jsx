import styled from "styled-components";
import {mobile} from "../responsive";
import logo from '../images/logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import {Person, Search, ShoppingCart} from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo1 = styled.img`
  width: 177px;
  height: 70px;
  /* UI Properties */
  background: transparent url("../images/logo.jpg") 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconContainer = styled.div`
  width: 55px;
  height: 70px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 0px 0px 0px 50px;
  transition: background-color 0.5s ease;
  cursor: pointer;
  /* UI Properties */
  &:hover{
    background: #F7941D 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 0px 50px;
    opacity: 1; 
  }
`
const Icon = styled.div`
  width: 27px;
  height: 27px;
  /* UI Properties */
  //text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo1 src={logo}/>
                </Left>
                <Right>
                    <IconContainer>
                        <Icon>
                            <Search fontSize={"large"} />
                        </Icon>
                    </IconContainer>
                    <IconContainer>
                        <Icon>
                            <Person fontSize={"large"} />
                        </Icon>
                    </IconContainer>
                    <IconContainer>
                        <Icon>
                            <ShoppingCart fontSize={"large"} />
                        </Icon>
                    </IconContainer>
                    <IconContainer>
                        <Icon>
                            <HomeIcon fontSize={"large"} />
                        </Icon>
                    </IconContainer>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
