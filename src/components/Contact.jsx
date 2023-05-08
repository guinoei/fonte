import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;  
`;

const Top = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

const ContactPic = styled.img`
  height: 150px;
  width: 150px;
`;

const ContactTitle = styled.h1`
  font-size: 25px;
  font-weight: 100; 
  cursor: default;
`;

const ContactEmail = styled.h1`
  font-size: 100px;
  font-weight: 800;
  font-style: italic;
  opacity: 80%;
  cursor: pointer;
  transition: .2s ease;
  
  &:hover{
    transform: scale(1.05);
    transition: .2s ease;
    opacity: 100%;
  }
`;

const Bot = styled.div`
  width: 100%;
  height: 300px;
  display: flex;  
  align-items: flex-end;
  justify-content: center; 
 
`;

const BotContent = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
 
`;

const ContactNumber = styled.h1`
  font-size: 50px;
  font-weight: 800; 
  font-style: italic;
  cursor: default;
`;

const Contact = () => {
  return (
    <Section>
      <Top>
        <ContactPic src="./img/cellphone.gif"/>
        <ContactTitle>Entre em contato por email ou telefone!</ContactTitle>
        <ContactEmail>fonte@emailzao.com</ContactEmail>
      </Top>
      <Bot>
        <BotContent>
        <ContactNumber>(11)9 6969-6969</ContactNumber>
        <ContactTitle>Rua Zeca Pau Gordinho - São Paulo - Brasil</ContactTitle>
        </BotContent>
      </Bot>
    </Section>
  )
}

export default Contact
