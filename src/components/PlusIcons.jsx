import Home from "../pages/Home";
import styled from "styled-components";
import {Add, Cancel} from "@mui/icons-material";
import {useState} from "react";

const PlusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`
const PlusIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* UI Properties */
  background: #F7941D 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  transition: width 0.5s ease;
  cursor: pointer;
  &:hover{
    width: 60px;
    height: 20px;
  }
  
`
const SeeMore = styled.h5`
  font-size: 14px;
  font-weight: 600;
  transition: width 0.5s ease;
`

function PlusIcons() {
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    return (
        <PlusContainer>
            <PlusIcon onMouseEnter={() => setIsHovering1(true)}
                      onMouseLeave={() => setIsHovering1(false)}>
                {
                    !isHovering1 ? <Add fontSize={"small"}/> :  <SeeMore>more</SeeMore>
                }

            </PlusIcon>
            <PlusIcon style={{marginLeft:"170px"}} onMouseEnter={() => setIsHovering2(true)}
                      onMouseLeave={() => setIsHovering2(false)}>
                {
                    !isHovering2 ? <Add fontSize={"small"}/> :  <SeeMore>more</SeeMore>
                }
            </PlusIcon>
            <PlusIcon style={{marginLeft:"870px"}} onMouseEnter={() => setIsHovering3(true)}
                      onMouseLeave={() => setIsHovering3(false)}>
                {
                    !isHovering3 ? <Add fontSize={"small"}/> :  <SeeMore>more</SeeMore>
                }
            </PlusIcon>
            <PlusIcon style={{marginLeft:"1070px"}} onMouseEnter={() => setIsHovering4(true)}
                      onMouseLeave={() => setIsHovering4(false)}>
                {
                    !isHovering4 ? <Add fontSize={"small"}/> :  <SeeMore>more</SeeMore>
                }
            </PlusIcon>
        </PlusContainer>
    );
}

export default PlusIcons;