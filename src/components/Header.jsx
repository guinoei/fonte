import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Fountain from "./Fountain";
import Gamepad from "./Gamepad";
import styled from "styled-components";
import { PointLight } from "three";

const Section = styled.div`
  height: 100vh;  
  display:flex;  
  justify-content: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Contents = styled.div`
  height: 100vh;
  width: 100%; 
  display:flex; 
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`  
  width: 550px;
  height: 550px;
  display: flex;
  position: absolute; 
  z-index: 1;
  top: -100px;  
  object-fit: cover;
`;

const Penta = styled.img` 
  height: 70%;  
  display: flex;
  position: absolute;
  opacity: 50%;  
  top: 10px;  
  object-fit: cover;  
  animation: logo-b 1s infinite ease alternate;

  @keyframes logo-b{
    to{transform: scale(1.03);}
  }
`;

const Menug = styled.div`
  height: 230px;
  width: 100%; 
  display: flex;  
  gap: 100px;  
  justify-content: center;   
`;

const Computer = styled.div`
  height: 140px;
  width: 140px; 
  background-image: url("./img/computer.gif");
  background-size: cover;
  background-position: center; 
  cursor: pointer; 

  display: flex;  
  align-items: flex-end;
  transition: .2s ease;
  
  &:hover{
    transition: .2s ease;
    transform: scale(1.15);
  }
`;

const Console = styled.div`
  height: 140px;
  width: 140px;
  background-image: url("./img/console.gif");
  background-size: cover;
  background-position: center;
  cursor: pointer; 

  display: flex; 
  align-items: flex-end;
  transition: .2s ease;
  
  &:hover{
    transition: .2s ease;
    transform: scale(1.15);
  }
`;

const Game = styled.div`
  height: 140px;
  width: 140px;
  background-image: url("./img/game.gif");
  background-size: cover;
  background-position: center;
  cursor: pointer; 

  display: flex;  
  align-items: flex-end;
  transition: .2s ease;
  
  &:hover{
    transition: .2s ease;
    transform: scale(1.15);
  }
`;

const Contact = styled.div`
  height: 140px;
  width: 140px;
  background-image: url("./img/cellphone.gif");
  background-size: cover;
  background-position: center;
  cursor: pointer; 

  display: flex;  
  align-items: flex-end;
  transition: .2s ease;
  
  &:hover{
    transition: .2s ease;
    transform: scale(1.15);
  }
`;

const Menus = styled.h2` 
  top: 10px;
  width: 140px;
  text-align: center;
  position: relative;
  text-transform: capitalize;
  color: transparent;
  -webkit-text-stroke: 1px whitesmoke;
  font-size: 20px;
`;

const Header = () => {
  return (
    <Section>
     <Contents>
     <Canvas camera={{fov:14, position: [4,2,4]}}>     
      {/* <ambientLight intensity={2}/> */}
      <pointLight intensity={0.18} position={[10,10,10]} color="#5f2c8f" />
      <directionalLight position={[0,1,1]} color="#700000" />       
      <Fountain/>         
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
     </Canvas>
     <Logo src="./img/logo.png"/>
     <Penta src="./img/penta.png"/>
     <Menug>
      <Computer>
      <Menus>hardware</Menus>
      </Computer>      
      <Console>
      <Menus>video games</Menus>
      </Console>      
      <Game>
      <Menus>jogos</Menus>
      </Game>
      <Contact>
        <Menus>contato</Menus>
      </Contact>     
     </Menug>     
     </Contents>
    </Section>
  )
}

export default Header
